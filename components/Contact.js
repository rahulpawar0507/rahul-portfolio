"use client";

import { useState } from "react";
import { profile } from "../lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", text: "Bhej raha hoon..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Kuch galat ho gaya.");

      setStatus({ type: "success", text: "Message bhej diya gaya. Thank you!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: err.message });
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-grid">
          <div>
            <p className="about-text">
              Feel free to message me regarding any projects, job opportunities, or questions. 
              I'll get back to you as soon as possible!
            </p>

            <ul className="plain-list contact-list">
              <li>
                ✉️ <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              {profile.phone && (
                <li>
                  📞 <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                </li>
              )}
              {profile.linkedin && (
                <li>
                  🔗{" "}
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
              )}
              {profile.github && (
                <li>
                  💻{" "}
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </div>

          <form className="card form" onSubmit={onSubmit}>
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                maxLength={100}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                maxLength={150}
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                required
                maxLength={2000}
              />
            </label>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status.text && (
              <p className={`form-status ${status.type}`}>{status.text}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
