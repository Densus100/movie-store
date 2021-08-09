import React from "react";
import { Typography, Button, makeStyles, Grid } from "@material-ui/core";
import { Subscriptions, ShoppingCart } from "@material-ui/icons/";

const useStyles = makeStyles({
  plan: {
    margin: "3px",
    border: "2px solid #C7C7C7",
    borderRadius: "5px",
    padding: "15px",
    height: "250px",
    position: "relative",
  },

  buyButtonWrapper: {
    position: "absolute",
    bottom: "20px",
    textAlign: "center",
    justifyContent: "center",
  },
});

function Plan(props) {
  console.log(props);
  const classes = useStyles();
  const { items } = props;
  //   console.log(items);
  const listitems = items.map((item) => <li>{item}</li>);
  return (
    <Grid xs={12} md={4} lg={3} className={classes.plan} item>
      <Typography variant="h6">{props.title}</Typography>

      <ul>{listitems}</ul>
      <div className={classes.buyButtonWrapper}>
        <Button
          variant="contained"
          className={classes.buyButton}
          startIcon={<ShoppingCart />}
        >
          {props.price}
        </Button>
      </div>
    </Grid>
  );
}

export default Plan;
