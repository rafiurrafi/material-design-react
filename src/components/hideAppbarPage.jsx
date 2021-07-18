import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Fade from "@material-ui/core/Fade";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    marginLeft: -12,
    marginRight: 20,
  },
  flex: {
    flex: 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
});

const ScrolledAppbar = withStyles(styles)(
  class extends Component {
    constructor() {
      super();
      this.state = {
        scrolling: false,
        scrollTop: 0,
      };
      this.onScroll = this.onScroll.bind(this);
    }
    onScroll(e) {
      this.setState((state) => ({
        scrollTop: e.target.documentElement.scrollTop,
        scrolling: e.target.documentElement.scrollTop > state.scrollTop,
      }));
    }
    shouldComponentUpdate(nextProps, nextState) {
      return this.state.scrolling !== nextState.scrolling;
    }
    componentDidMount() {
      window.addEventListener("scroll", this.onScroll);
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.onScroll);
    }
    render() {
      const { classes } = this.props;
      return (
        <Fade in={!this.state.scrolling}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                className={classes.menu}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.flex} variant="title">
                App
              </Typography>
              <Button variant="text" color="inherit">
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </Fade>
      );
    }
  }
);

const HideAppbarPage = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ScrolledAppbar />
      <div className={classes.toolbarMargin} />
      <ul>
        {new Array(500).fill(null).map((v, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default withStyles(styles)(HideAppbarPage);
