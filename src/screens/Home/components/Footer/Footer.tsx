import styles from "./Footer.module.scss";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {year} Roman Riezanov. Built with React & TypeScript.
      </p>
    </footer>
  );
}
