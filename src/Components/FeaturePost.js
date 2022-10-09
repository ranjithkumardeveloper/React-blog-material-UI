import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  textContainer: {
    color: "white",
  },
});
const FeaturePost = () => {
  const classes = useStyles();
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          React is a JavaScript library for building user interfaces
        </Typography>
        <Typography variant="h5" component="h2">
          React, sometimes referred to as a frontend JavaScript framework, is a
          JavaScript library created by Facebook.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" style={{ color: "#90caf9", fontWeight: 700 }}>
          Read More..
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturePost;
