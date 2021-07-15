import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: "center",
  },
});

const UnderstandingBreakpoints = (props) => {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>Grid item</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>Grid item</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>Grid item</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>Grid item</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(UnderstandingBreakpoints);
