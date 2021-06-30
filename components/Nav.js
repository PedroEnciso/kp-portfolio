import styles from "../styles/componentStyles/nav.module.css";

export default function Nav({ setActive, active }) {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            {active === "design" ? (
              <button
                className={styles.activeButton}
                onClick={() => setActive("design")}
              >
                design
              </button>
            ) : (
              <button
                className={styles.button}
                onClick={() => setActive("design")}
              >
                design
              </button>
            )}
          </li>
          <li>
            {active === "photography" ? (
              <button
                className={styles.activeButton}
                onClick={() => setActive("photography")}
              >
                photography
              </button>
            ) : (
              <button
                className={styles.button}
                onClick={() => setActive("photography")}
              >
                photography
              </button>
            )}
          </li>
          <li>
            {active === "aboutMe" ? (
              <button
                className={styles.activeButton}
                onClick={() => setActive("aboutMe")}
              >
                about me
              </button>
            ) : (
              <button
                className={styles.button}
                onClick={() => setActive("aboutMe")}
              >
                about me
              </button>
            )}
          </li>
        </ul>
      </nav>
      <hr className={styles.hr} />
    </div>
  );
}
