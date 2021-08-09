import React from "react";
import {
  Typography,
  Container,
  makeStyles,
  Grid,
  ImageList,
} from "@material-ui/core";
import Plan from "../Components/Plan";
import example from "../../src/example.json";
import MoviePoster from "../Components/MoviePoster";

const useStyles = makeStyles({
  planWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

function Subscription() {
  const classes = useStyles();
  const planList = [
    {
      title: "Membership Plan 1",
      items: ["Subscribe 5 Premium Movies", "Email & Community Support"],
      price: "Rp. 9.999,-",
    },
    {
      title: "Membership Plan 2",
      items: ["Subscribe 10 Premium Movies", "24/7 Customer Support"],
      price: "Rp. 19.999,-",
    },
    {
      title: "Membership Plan 3",
      items: [
        "Subscribe 15 Premium Movies",
        "24/7 Customer Support",
        "Daily News & Movie Recomendations",
      ],
      price: "Rp. 29.999,-",
    },
  ];

  const items = example.results;

  return (
    <Container>
      <Container style={{ marginBottom: "50px" }}>
        <Typography
          color="textSecondary"
          variant="h5"
          component="h2"
          gutterBottom
        >
          Membership
        </Typography>
        <Grid className={classes.planWrapper} container>
          {planList.map((list) => (
            <Plan
              title={list.title}
              items={list.items}
              price={list.price}
            ></Plan>
          ))}
        </Grid>
      </Container>

      <Container style={{ marginBottom: "50px" }}>
        <Typography
          color="textSecondary"
          variant="h5"
          component="h2"
          gutterBottom
        >
          My Subscription
        </Typography>
        <ImageList className={classes.wrapper}>
          {items.map((item) => (
            <MoviePoster
              key={item.id}
              title={item.title}
              original_title={item.original_title}
              vote_average={item.vote_average}
              release_date={item.release_date}
              poster_path={item.poster_path}
            ></MoviePoster>
          ))}
        </ImageList>
      </Container>

      {/* <Button color="secondary" variant="contained" endIcon={<Subscriptions />}>
        Subscribe
      </Button> */}
    </Container>
  );
}

export default Subscription;
