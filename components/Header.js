import { Typography } from "@material-ui/core";
import Image from "next/image";
import name from "../public/name.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    marginTop: "1.25rem",
  },
  image: {
    position: "absolute",
  },
});

export default function Header({ home }) {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      {home ? (
        <>
          <div>
            <Image className={classes.image} src={name} alt="Kalea Vizmanos" />
          </div>
        </>
      ) : (
        <>
          <Typography variant="h1" component="h1">
            This is not the home page
          </Typography>
        </>
      )}
    </header>
  );
}
