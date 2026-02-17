import { personalInfo } from "@/data";

import { DownloadIcon } from "../Icons";

import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.label}>
              {personalInfo.role} &middot; {personalInfo.location}
            </p>
            <h1 className={styles.name}>{personalInfo.name}</h1>
            <p className={styles.tagline}>{personalInfo.tagline}</p>
            <div className={styles.actions}>
              <a href="#contact" className={styles.btnPrimary}>
                Get in Touch
              </a>
              <a
                href={personalInfo.resumePath}
                download
                className={styles.btnSecondary}
              >
                <DownloadIcon size={18} />
                Download Resume
              </a>
            </div>
          </div>
          <div className={styles.photoWrapper}>
            <img
              src="/photo.png"
              alt={personalInfo.name}
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
