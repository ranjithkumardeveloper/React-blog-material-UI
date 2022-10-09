import {
  Badge,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AccountCircle, Menu, Notifications } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagLine: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar>
        <IconButton>
          <Menu />
        </IconButton>
        <Typography className={classes.title}>React Website</Typography>
        <IconButton color="inherit">
          <Badge badgeContent={17} color="primary">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar className={classes.tagline}>
        React is a Javascript library for building user interface
      </Toolbar>
    </>
  );
};

export default Header;
