import { useState } from "react";

import { personalInfo } from "@/data";

import {
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "../Icons";
import { Section } from "../Section/Section";

import styles from "./Contact.module.scss";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" title="Contact" alt>
      <div className={styles.wrapper}>
        <p className={styles.subtitle}>
          Open to new opportunities and interesting projects. Let's connect.
        </p>

        <div className={styles.links}>
          <a
            href={`mailto:${personalInfo.email}`}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon size={18} />
            {personalInfo.email}
          </a>

          <button
            onClick={copyEmail}
            className={`${styles.copyBtn} ${copied ? styles.copied : ""}`}
            aria-label="Copy email address"
          >
            {copied ? <CheckIcon size={18} /> : <CopyIcon size={18} />}
            {copied ? "Copied!" : "Copy Email"}
          </button>

          <a
            href={personalInfo.github}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon size={18} />
            GitHub
          </a>

          <a
            href={personalInfo.linkedin}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon size={18} />
            LinkedIn
          </a>
        </div>

        <a
          href={personalInfo.resumePath}
          download
          className={styles.downloadBtn}
        >
          <DownloadIcon size={18} />
          Download Resume
        </a>
      </div>
    </Section>
  );
}
