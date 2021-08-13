import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Button } from "@material-ui/core";

const CustomSnackbar = () => {
  const [openSnack, setOpenSnack] = useState(false);
  const onOpenSnack = () => {
    setOpenSnack(true);
  };
  const onCloseSnack = () => {
    setOpenSnack(false);
  };
  return (
    <>
      <Button onClick={onOpenSnack} primary>
        Open snackbar
      </Button>
      <Snackbar
        open={openSnack}
        message="Hello burra"
        autoHideDuration={1000}
        onClose={onCloseSnack}
        ContentProps={{ variant: "h1" }}
      />
    </>
  );
};
export default CustomSnackbar;
