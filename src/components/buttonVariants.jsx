import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = (theme) => ({
  container: {
    margin: theme.spacing(1),
  },
  content: {
    margin: theme.spacing(1),
  },
  fab: {
    position: "fixed",
    bottom: 20,
    right: 30,
  },
});
const ButtonVariants = (props) => {
  const { classes } = props;
  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      spacing={2}
    >
      <Grid container justify="space-around">
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/about">
          About
        </Button>
        <Button component={Link} to="/contact">
          Contact
        </Button>
        <Fab className={classes.fab}>
          <AddIcon color="primary" />
        </Fab>
      </Grid>
      {/* Grid content */}
      <Grid container className={classes.content}>
        <Switch>
          <Route
            path="/about"
            component={() => <Typography variant="h1">About</Typography>}
          />
          <Route
            path="/contact"
            component={() => <Typography variant="h1">Contact</Typography>}
          />
          <Route
            path="/"
            component={() => <Typography variant="h1">Home</Typography>}
          />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ButtonVariants);
