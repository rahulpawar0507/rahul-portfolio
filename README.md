# Rahul Pawar - Portfolio

Next.js (App Router) + Node.js (API route + Nodemailer) se bana personal portfolio.

## Run karne ke steps

```bash
npm install
cp .env.example .env.local   # Windows: copy .env.example .env.local
npm run dev
```

Browser mein `http://localhost:3000` kholo.

## Content kaise badlein

Saara content `lib/data.js` mein hai: naam, about, skills, experience, projects, links. Sirf wahi file edit karo.

- `github`, `linkedin`, `phone` khali hain. Link daaloge to automatically site par dikhne lagenge.
- Project mein `github` ya `live` link daaloge to uske buttons dikhenge.

## Resume download

Apna resume PDF `public/` folder mein `Rahul-Pawar-Resume.pdf` naam se rakho. Hero ka "Download Resume" button wahi file uthayega.

## Contact form (Node.js backend)

Form `app/api/contact/route.js` ko call karta hai jo Nodemailer se tumhare email par message bhejta hai.

1. `.env.local` mein `SMTP_PASS` mein Gmail App Password daalo (Google Account > Security > 2-Step Verification > App passwords).
2. `.env.local` kabhi GitHub par push mat karo (`.gitignore` mein already hai).

Agar `.env.local` set nahi hai to development mein message sirf terminal mein log hota hai.

## Deploy (free)

**Vercel (recommended):**
1. Project GitHub par push karo.
2. vercel.com par repo import karo.
3. Environment Variables mein `.env.example` ke saare keys daalo.
4. Deploy dabao. Tumhe `yourname.vercel.app` link mil jayega.

## Folder structure

```
app/            layout, page, globals.css, api/contact/route.js
components/     Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
lib/data.js     saara content
public/         resume PDF aur images
```
