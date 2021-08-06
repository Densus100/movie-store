import React from "react";
import { Typography, Button, Container, makeStyles } from "@material-ui/core";
import { Subscriptions } from "@material-ui/icons/";

const useStyles = makeStyles({});

function Subscription() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
      >
        Subscription Page
      </Typography>
      <Button color="secondary" variant="contained" endIcon={<Subscriptions />}>
        Subscribe
      </Button>
    </Container>
  );
}

export default Subscription;
