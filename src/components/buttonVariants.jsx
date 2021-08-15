import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const styles = (theme) => ({
  container: {
    margin: theme.spacing(1),
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
      <Grid item>
        <Button variant="text">Text</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined">Text</Button>
      </Grid>
      <Grid item>
        <Button variant="contained">Text</Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ButtonVariants);
