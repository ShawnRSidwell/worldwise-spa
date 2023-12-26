import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; copywright {new Date().getFullYear} by WorldWise inc.
      </p>
    </footer>
  );
}

export default Footer;
