import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import styles from "../styles/componentStyles/layout.module.css";

export default function Layout({ children, home, setActive, active }) {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="This is a portfolio of Kalea Vizmanos' work in graphic design and photography."
        />
      </Head>
      <div className={styles.headerContainer}>
        {" "}
        <Header home={home} />
      </div>
      <div className={styles.contentContainer}>
        <Nav setActive={setActive} active={active} />
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  );
}
