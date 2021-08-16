import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: { margin: theme.spacing.unit * 3 },
}));

const ControllingInput = (props) => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.container}>
      <Grid item>
        <TextField
          id="first"
          label="First"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          id="second"
          label="Second"
          value={second}
          onChange={(e) => setSecond}
        />
      </Grid>
      <Grid item>
        <TextField
          id="third"
          label="Third"
          value={third}
          onChange={(e) => setThird(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default ControllingInput;
