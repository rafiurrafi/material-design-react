import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});
const AutoBreakpoints = (props) => {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>Paper 1</Paper>
      </Grid>
      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>Paper 1</Paper>
      </Grid>
      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>Paper 1</Paper>
      </Grid>
      <Grid item xs="auto" sm="auto" md="auto">
        <Paper className={classes.paper}>Paper 1</Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AutoBreakpoints);
