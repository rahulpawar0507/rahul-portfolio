import { experience } from "../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experience.map((job) => (
            <div key={job.company} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card">
                <div className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <span className="period">{job.period}</span>
                </div>
                <ul className="bullets">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
