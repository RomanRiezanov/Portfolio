import { experience } from "@/data";

import { Section } from "../Section/Section";

import styles from "./Experience.module.scss";

export function Experience() {
  return (
    <Section id="experience" title="Experience" alt>
      <div className={styles.timeline}>
        {experience.map((job) => (
          <div key={job.company} className={styles.item}>
            <div className={styles.meta}>
              <h3 className={styles.company}>{job.company}</h3>
              <span className={styles.period}>{job.period}</span>
            </div>

            <div className={styles.roles}>
              {job.roles.map((role) => (
                <div key={role.title} className={styles.role}>
                  <h4 className={styles.roleTitle}>{role.title}</h4>
                  <span className={styles.rolePeriod}>{role.period}</span>
                  <ul className={styles.highlights}>
                    {role.highlights.map((item) => (
                      <li key={item} className={styles.highlight}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className={styles.technologies}>
                {job.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
