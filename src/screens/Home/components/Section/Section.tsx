import { ReactNode } from "react";

import { useScrollReveal } from "@/hooks/useScrollReveal";

import styles from "./Section.module.scss";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  alt?: boolean;
}

export function Section({ id, title, children, alt }: SectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${alt ? styles.alt : ""} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
}
