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

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const FixedColumnLayout = (props) => {
  const { classes } = props;
  return (
    <Container spacing={2}>
      <Item xs={6}>
        <Paper className={classes.paper}>Paper</Paper>
      </Item>
      <Item xs={6}>
        <Paper className={classes.paper}>Paper</Paper>
      </Item>
      <Item xs={6}>
        <Paper className={classes.paper}>Paper</Paper>
      </Item>
      <Item xs={6}>
        <Paper className={classes.paper}>Paper</Paper>
      </Item>
      <Item xs={6}>
        <Paper className={classes.paper}>Paper</Paper>
      </Item>
      <Item xs={6}>
        <Paper className={classes.paper}>Paper</Paper>
      </Item>
      <Item xs={6}>
        <Paper className={classes.paper}>Paper</Paper>
      </Item>
      <Item xs={6}>
        <Paper className={classes.paper}>Paper</Paper>
      </Item>
    </Container>
  );
};

export default withStyles(styles)(FixedColumnLayout);
