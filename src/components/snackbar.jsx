import React, { Fragment, useState } from "react";
import { Route, Link } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

const CustomSnackbar = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open snackbar</Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="All done successfully"
        action={[
          <IconButton color="inherit" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};

export default CustomSnackbar;
