import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

const CustomSnackbar = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Switch>
        <Route
          path="/thing"
          component={() => <Typography variant="h1">The thing</Typography>}
        />
        <Route
          path="/"
          component={() => (
            <Button onClick={() => setOpen(true)}>Open Snackbar</Button>
          )}
        />
      </Switch>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="All done successfully"
        autoHideDuration={1000}
        action={[
          <Button
            color="secondary"
            to="/thing"
            component={Link}
            onClick={() => setOpen(false)}
          >
            THING
          </Button>,
          <IconButton color="inherit" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};

export default CustomSnackbar;
