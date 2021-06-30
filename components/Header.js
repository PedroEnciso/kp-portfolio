import Image from "next/image";
import name from "../public/name.svg";
import styles from "../styles/componentStyles/header.module.css";

export default function Header({ home }) {
  return (
    <header className={styles.header}>
      {home ? (
        <>
          <div>
            <Image className={styles.name} src={name} alt="Kalea Vizmanos" />
          </div>
        </>
      ) : (
        <>
          <h1>This is not the home page</h1>
        </>
      )}
    </header>
  );
}
