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
const Item = (props) => <Grid item xs={12} sm={6} md={3} {...props} />;

const AbstractingContainerAndItems = (props) => {
  const { classes } = props;
  return (
    <Container spacing={3}>
      <Item>
        <Paper className={classes.paper}>Paper item</Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>Paper item</Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>Paper item</Paper>
      </Item>
      <Item>
        <Paper className={classes.paper}>Paper item</Paper>
      </Item>
    </Container>
  );
};

export default withStyles(styles)(AbstractingContainerAndItems);
