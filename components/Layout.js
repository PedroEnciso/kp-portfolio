import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../styles/theme";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
  },
  marginStyles: {
    backgroundColor: theme.palette.secondary.main,
  },
});

export default function Layout({ children, home, setActive, active }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="This is a portfolio of Kalea Vizmanos' work in graphic design and photography."
        />
      </Head>
      <Grid container className={classes.container}>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <Header home={home} />
          <Nav setActive={setActive} active={active} />
          <main>{children}</main>
          <Footer />
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </div>
  );
}
