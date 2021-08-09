import React, { useState } from "react";
import {
  CardActionArea,
  ImageListItem,
  ImageListItemBar,
  makeStyles,
  Fade,
  Button,
} from "@material-ui/core";
import "./MoviePoster.css";
import Skeleton from "@material-ui/lab/Skeleton";
import { StarRate, Subscriptions, Info } from "@material-ui/icons";

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
  const [infoBar, setInfoBar] = useState(false);
  const [fadeAnimation, setFadeAnimation] = useState();
  const [imageDarken, setImageDarken] = useState();
  const [loaded, setLoaded] = useState(false);

  const classes = useStyles();

  const toggleImageBarIn = (e) => {
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
        subtitle={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span>Rating: {props.vote_average}/10</span>
            <StarRate />
          </div>
        }
      ></ImageListItemBar>
    );
  };
  const toggleImageBarOut = (e) => {
    setFadeAnimation(false);
    setImageBar(false);
    setImageDarken({});
    setInfoBar(false);
  };

  const infoBarHandler = (e) => {
    if (!infoBar) {
      setInfoBar(true);
      setImageBar(
        <ImageListItemBar
          style={{ height: "120px" }}
          className={classes.imageBar}
          title={`${props.original_title} (${new Date(
            props.release_date
          ).getFullYear()})`}
          subtitle={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>Rating: {props.vote_average}/10</span>
              <StarRate />
              <span>
                <Button
                  style={{ margin: "5px" }}
                  name="subs"
                  color="secondary"
                  variant="contained"
                  endIcon={<Subscriptions />}
                >
                  Subscribe
                </Button>
                <Button
                  style={{ margin: "5px" }}
                  name="info"
                  variant="contained"
                  endIcon={<Info />}
                >
                  Info
                </Button>
              </span>
            </div>
          }
        ></ImageListItemBar>
      );
    } else if (infoBar && e.target.children.length !== 1) {
      setInfoBar(false);
      setImageBar(
        <ImageListItemBar
          className={classes.imageBar}
          title={`${props.original_title} (${new Date(
            props.release_date
          ).getFullYear()})`}
          subtitle={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>Rating: {props.vote_average}/10</span>
              <StarRate />
            </div>
          }
        ></ImageListItemBar>
      );
    }
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
      <CardActionArea onClick={infoBarHandler} className={classes.hoverArea}>
        {loaded ? null : (
          <Skeleton animation="wave" variant="rect" width={266} height={400} />
        )}
        <img
          className={classes.image}
          style={imageDarken}
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          alt={props.title}
          onLoad={() => setLoaded(true)}
        />
      </CardActionArea>

      <Fade in={fadeAnimation} timeout={600}>
        <div onClick={infoBarHandler}>{imageBar}</div>
      </Fade>

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
