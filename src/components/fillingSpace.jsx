import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

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

const FillingSpace = (props) => {
  const { classes } = props;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
              <Chip label="Chip" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(FillingSpace);
