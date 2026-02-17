import { skillCategories } from "@/data";

import { Section } from "../Section/Section";

import styles from "./Skills.module.scss";

export function Skills() {
  return (
    <Section id="skills" title="Skills" alt>
      <div className={styles.categories}>
        {skillCategories.map((category) => (
          <div key={category.name} className={styles.category}>
            <h3 className={styles.categoryName}>{category.name}</h3>
            <div className={styles.tags}>
              {category.items.map((item) => (
                <span key={item} className={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
