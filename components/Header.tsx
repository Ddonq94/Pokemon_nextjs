import styles from "../styles/Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <strong>Pokemon</strong>
      <div>
        Search
        <input className={styles.headerInput} type="text" />
      </div>
    </div>
  );
}
