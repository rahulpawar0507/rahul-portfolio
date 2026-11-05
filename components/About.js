import { about, education, certifications, languages } from "../lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div>
            {about.map((p, i) => (
              <p key={i} className="about-text">
                {p}
              </p>
            ))}
          </div>

          <div className="card">
            <h3>Education</h3>
            {education.map((e) => (
              <div key={e.degree} className="edu">
                <strong>{e.degree}</strong>
                <span>{e.school}</span>
                <small>{e.period}</small>
              </div>
            ))}

            <h3 className="mt">Certifications</h3>
            <ul className="plain-list">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h3 className="mt">Languages</h3>
            <div className="chips">
              {languages.map((l) => (
                <span key={l} className="chip">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
