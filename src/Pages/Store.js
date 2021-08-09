import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  CircularProgress,
  ImageList,
  makeStyles,
} from "@material-ui/core";
import MoviePoster from "../Components/MoviePoster";

const useStyles = makeStyles({
  wrapper: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  loaderWrapper: {
    textAlign: "center",
    height: "100vh",
  },
  loader: {
    top: "50%",
    margin: "auto",
    position: "absolute",
  },
});

function Store() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // const toggleImageBarHandler = (e) => {
  //   console.log("test");
  // };

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=73d84d55c014c25019054914bad7b5ad"
      //   "https://jsonplaceholder.typicode.com/todos/"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data.results);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <Container className={classes.loaderWrapper}>
        <CircularProgress className={classes.loader} />
      </Container>
    );
  } else {
    // console.log(items);
    return (
      <Container style={{ marginBottom: "50px" }}>
        <Typography
          color="textSecondary"
          variant="h6"
          component="h2"
          gutterBottom
        >
          Store Page
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
    );
  }
}

export default Store;
