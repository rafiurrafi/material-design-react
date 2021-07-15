import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  paper: {},
});

const UnderstandingBreakpoints = (props) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>Grid item</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>Grid item</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>Grid item</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>Grid item</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(UnderstandingBreakpoints);
