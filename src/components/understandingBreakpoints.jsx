import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  root: {
    maxWidth: 1140,
    margin: "0 auto",
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

const UnderstandingBreakpoints = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>Column</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>Comumn</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>Column</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>Comumn</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(UnderstandingBreakpoints);
