import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../styles/theme";

const useStyles = makeStyles({
  nav: {
    width: "100%",
    margin: "0 auto",
  },
  ul: {
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    textTransform: "lowercase",
    fontWeight: "300",
    fontSize: "1.125rem",
    color: theme.palette.secondary.light,
  },
  activeButton: {
    textTransform: "lowercase",
    fontWeight: "300",
    fontSize: "1.125rem",
    color: theme.palette.primary.main,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    borderRadius: "0px",
  },
  hr: {
    width: "90%",
    backgroundColor: theme.palette.secondary.light,
    border: "none",
    height: "1px",
    margin: "1rem auto 0rem",
  },
});

export default function Nav({ setActive, active }) {
  const classes = useStyles();
  return (
    <div>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li>
            {active === "design" ? (
              <Button
                className={classes.activeButton}
                onClick={() => setActive("design")}
              >
                design
              </Button>
            ) : (
              <Button
                className={classes.button}
                onClick={() => setActive("design")}
              >
                design
              </Button>
            )}
          </li>
          <li>
            {active === "photography" ? (
              <Button
                className={classes.activeButton}
                onClick={() => setActive("photography")}
              >
                photography
              </Button>
            ) : (
              <Button
                className={classes.button}
                onClick={() => setActive("photography")}
              >
                photography
              </Button>
            )}
          </li>
          <li>
            <Button
              className={classes.button}
              onClick={() => setActive("aboutMe")}
            >
              about me
            </Button>
          </li>
        </ul>
      </nav>
      <hr className={classes.hr} />
    </div>
  );
}
