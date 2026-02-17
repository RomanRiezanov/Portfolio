import { useState } from "react";

import { projects } from "@/data";

import { ExternalLinkIcon } from "../Icons";
import { Section } from "../Section/Section";

import styles from "./Projects.module.scss";

function getScreenshotUrl(url: string) {
  return `https://image.thum.io/get/width/600/crop/400/noanimate/${url}`;
}

export function Projects() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (url: string) => {
    setFailedImages((prev) => new Set(prev).add(url));
  };

  return (
    <Section id="projects" title="Live Projects">
      <div className={styles.grid}>
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.browser}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.browserUrl}>
                  {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </div>
              </div>
              <div className={styles.browserContent}>
                {!failedImages.has(project.url) ? (
                  <img
                    src={getScreenshotUrl(project.url)}
                    alt={`${project.title} preview`}
                    className={styles.screenshot}
                    loading="lazy"
                    onError={() => handleImageError(project.url)}
                  />
                ) : (
                  <div className={styles.fallback}>
                    <span className={styles.fallbackTitle}>
                      {project.title}
                    </span>
                    <span className={styles.fallbackUrl}>
                      {project.url
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")}
                    </span>
                  </div>
                )}
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>
                    <ExternalLinkIcon size={18} />
                    Visit Website
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={styles.cardStack}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
