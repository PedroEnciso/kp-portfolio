import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Design from "../components/HomeComponents/Design";
import Photography from "../components/HomeComponents/Photography";
import AboutMe from "../components/HomeComponents/AboutMe";

export default function Home() {
  const [active, setActive] = useState("design");
  return (
    <Layout home setActive={setActive} active={active}>
      <Head>
        <title>Kalea Vizmanos</title>
      </Head>
      <section>
        {active === "design" && <Design />}
        {active === "photography" && <Photography />}
        {active === "aboutMe" && <AboutMe />}
      </section>
    </Layout>
  );
}
