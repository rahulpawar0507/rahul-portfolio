import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="card">
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
