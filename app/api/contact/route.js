import nodemailer from "nodemailer";

// Runs on the Node.js runtime (needed for nodemailer).
export const runtime = "nodejs";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const escapeHtml = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return Response.json({ error: "Saari fields bharna zaroori hai." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return Response.json({ error: "Valid email daalo." }, { status: 400 });
  }
  if (name.length > 100 || email.length > 150 || message.length > 2000) {
    return Response.json({ error: "Message bahut lamba hai." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;

  // Agar SMTP set nahi hai (local development), to sirf console mein log karo.
  if (!SMTP_USER || !SMTP_PASS) {
    console.log("[contact] SMTP not configured. Message received:", { name, email, message });
    return Response.json({ ok: true, note: "SMTP not configured; logged to server console." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST || "smtp.gmail.com",
      port: Number(SMTP_PORT) || 465,
      secure: (Number(SMTP_PORT) || 465) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_TO || SMTP_USER,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return Response.json(
      { error: "Message bhej nahi paya. Thodi der baad try karo ya seedha email karo." },
      { status: 500 }
    );
  }
}
