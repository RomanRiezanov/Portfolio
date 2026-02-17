import { about } from "@/data";

import { Section } from "../Section/Section";

import styles from "./About.module.scss";

export function About() {
  return (
    <Section id="about" title="About">
      <p className={styles.text}>{about}</p>
    </Section>
  );
}
