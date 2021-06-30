import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import styles from "../styles/componentStyles/layout.module.css";

export default function Layout({ children, home, setActive, active }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="This is a portfolio of Kalea Vizmanos' work in graphic design and photography."
        />
      </Head>
      <Header home={home} />
      <Nav setActive={setActive} active={active} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
