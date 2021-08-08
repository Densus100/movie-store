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
      <Container>
        <CircularProgress />
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

        {/* <ImageList rowHeight={500} cols={4} gap={10}>
          {items.map((item) => (
            <ImageListItem onMouseEnter={toggleImageBarHandler} key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
              <ImageListItemBar
                className={classes.imageBar}
                title={`${item.original_title} (${new Date(
                  item.release_date
                ).getFullYear()})`}
                subtitle={<span>Rating: {item.vote_average}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.original_title}`}
                  ></IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList> */}

        {/* <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Paper>
                <Box textAlign="center">
                  {item.original_title}{" "}
                  {new Date(item.release_date).getFullYear()}
                </Box>

                <br></br>
              </Paper>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    );
  }
  //   const [items, setItems] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const { data } = await fetch(
  //         //   "https://api.themoviedb.org/3/trending/movie/day?api_key=73d84d55c014c25019054914bad7b5ad"
  //         "https://jsonplaceholder.typicode.com/todos/"
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setItems(data);
  //         });
  //     };
  //     fetchData();
  //   }, []);
  //   return (
  //     <Container>
  //       <Typography
  //         color="textSecondary"
  //         variant="h6"
  //         component="h2"
  //         gutterBottom
  //       >
  //         Store Page
  //       </Typography>
  //       <Grid Container>
  //         {items.results.map((item) => (
  //           <Grid item key={item.id} xs={12} sm={6} md={4}>
  //             <Paper>
  //               {/* {item.original_title}
  //               {item.overview} */}
  //               {item.title}
  //               {item.comleted}
  //             </Paper>
  //           </Grid>
  //         ))}
  //       </Grid>
  //     </Container>
  //   );
}

export default Store;
