import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const ControllingInput = (props) => {
  const [inputs, setInputs] = useState([
    { id: "first", label: "First", value: "" },
    { id: "second", label: "Second", value: "" },
    { id: "third", label: "Third", value: "" },
  ]);
  const onChange = ({ target }) => {
    const newInputs = [...inputs];
    const index = inputs.findIndex((input) => input.id === target.id);
    newInputs[index] = { ...inputs[index], value: target.value };
    setInputs(newInputs);
  };
  return (
    <Grid container spacing={4}>
      {inputs.map((input) => (
        <Grid item>
          <TextField
            id={input.id}
            label={input.label}
            value={input.value}
            onChange={onChange}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ControllingInput;
