import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  CircularProgress,
  Grid,
  Paper,
} from "@material-ui/core";

function Store() {
  //   const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=73d84d55c014c25019054914bad7b5ad"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          //   setIsLoaded(true);
          setItems(result);
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      );
  }, []);

  console.log(items);
  return (
    <Container>
      <Typography
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
      >
        Store Page
      </Typography>

      <Grid Container>
        {items.results.map((item) => (
          <Grid item md={3}>
            <Paper>
              {item.original_title}
              {item.overview}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* <ul>
          {items.results.map((item) => (
            <li key={item.id}>
              {item.original_title}
              {item.overview}
            </li>
          ))}
        </ul> */}
    </Container>
  );
}

export default Store;
