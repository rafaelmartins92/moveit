import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileCointainer}>
      <img src="https://github.com/rafaelmartins92.png" alt="Rafael Martins" />
      <div>
        <strong> Rafael Martins</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
