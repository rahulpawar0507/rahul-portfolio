import { profile } from "../lib/data";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Hi, I'M Rahul Pawar</p>
        <h1>
          {profile.name}
          <span className="gradient-text">.</span>
        </h1>
        <h2 className="hero-role gradient-text">{profile.role}</h2>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="btn-row">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href={profile.resume} download className="btn btn-ghost">
            Download Resume
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact Me
          </a>
        </div>

        <p className="hero-meta">📍 {profile.location}</p>
      </div>
    </section>
  );
}
