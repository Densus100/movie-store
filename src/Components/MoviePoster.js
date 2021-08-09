import React, { useState } from "react";
import {
  CardActionArea,
  ImageListItem,
  ImageListItemBar,
  makeStyles,
  Fade,
} from "@material-ui/core";
import "./MoviePoster.css";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
  imageBar: {
    backgorund: "rgba(0, 0, 0, 0.7)",
    bottom: "5px",
  },
  imageWrapper: {
    flexWrap: "wrap",
    // margin: "100px",
  },
  image: {
    maxHeight: "400px",
    width: "auto",
    transition: "0.5s",
    transform: "scale(1.035)",
  },
});

function MoviePoster(props) {
  const [imageBar, setImageBar] = useState(false);
  const [fadeAnimation, setFadeAnimation] = useState(false);
  const [imageDarken, setImageDarken] = useState();
  const [loaded, setLoaded] = useState(false);

  const classes = useStyles();
  //   const { item } = props.movieItem;
  //   console.log(item);

  const toggleImageBarIn = (e) => {
    console.log("Masok");
    setImageDarken({
      filter: "brightness(80%)",
      transform: "scale(1)",
    });
    setFadeAnimation(true);
    setImageBar(
      <ImageListItemBar
        className={classes.imageBar}
        title={`${props.original_title} (${new Date(
          props.release_date
        ).getFullYear()})`}
        subtitle={<span>Rating: {props.vote_average}</span>}
      />
    );
  };
  const toggleImageBarOut = (e) => {
    console.log("Keluar");
    setFadeAnimation(false);
    setImageBar(false);
    setImageDarken({});
  };
  return (
    // <Grid xs={12} sm={6} md={4}>
    <ImageListItem
      className={classes.imageWraper}
      style={{ margin: "5px", marginBottom: "0px" }}
      onMouseEnter={toggleImageBarIn}
      onMouseLeave={toggleImageBarOut}
      key={props.id}
    >
      <CardActionArea className={classes.hoverArea}>
        {loaded ? null : <Skeleton variant="rect" width={266} height={400} />}
        <img
          style={loaded ? {} : { imageDarken }}
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          alt={props.title}
          onLoad={() => setLoaded(true)}
        />

        <Fade in={fadeAnimation} timeout={600}>
          <div>{imageBar}</div>
        </Fade>
      </CardActionArea>
      {/* <ImageListItemBar
        className={classes.imageBar}
        title={`${props.original_title} (${new Date(
          props.release_date
        ).getFullYear()})`}
        subtitle={<span>Rating: {props.vote_average}</span>}
        actionIcon={
          <IconButton
            aria-label={`info about ${props.original_title}`}
          ></IconButton>
        }
      /> */}
    </ImageListItem>
    // </Grid>
  );
}

export default MoviePoster;
