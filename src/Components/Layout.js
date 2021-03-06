import React, { useState } from "react";
import {
  makeStyles,
  Drawer,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { Home, Subscriptions, Menu } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => {
  return {
    root: { flexGrow: 1 },
    page: {
      background: "#f9f9f9",
      width: "100%",
      paddingTop: theme.spacing(3),
    },
    list: {
      width: 250,
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },

    active: {
      background: "#dedede",
    },

    title: {
      padding: theme.spacing(2),
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    applicationBar: {
      display: "flex",
      justifyContent: "space-between",
      background: "white",
      color: "black",
    },
  };
});

function Layout({ children }) {
  const classes = useStyles();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const toggleDrawerHandler = (event) => {
    setToggleDrawer(!toggleDrawer);
  };

  const menuItems = [
    {
      text: "Home",
      icon: <Home color="primary" />,
      path: "/",
    },
    {
      text: "Subscription",
      icon: <Subscriptions color="primary" />,
      path: "/subs",
    },
  ];

  return (
    <div>
      {/* App Bar */}
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.applicationBar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={toggleDrawerHandler}
            >
              <Menu />
              <Typography variant="h6">Menu</Typography>
            </IconButton>
            <Typography>Welcome to Movie Store</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>

      {/* Menu Drawer */}

      <Drawer
        className={classes.drawer}
        anchor="left"
        open={toggleDrawer}
        onClose={toggleDrawerHandler}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Movie Store
          </Typography>
        </div>

        {/* List / links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              onClick={() => {
                toggleDrawerHandler();
                history.push(item.path);
              }}
              key={item.text}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
