import { projects } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="card project">
              <span className="badge">{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="chips">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              {(p.github || p.live) && (
                <div className="btn-row small">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
