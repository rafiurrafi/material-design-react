import React, { Fragment, useState } from "react";
// import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

const CustomMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  function onOpen(e) {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }
  function onClose() {
    setAnchorEl(null);
    setOpen(false);
  }
  return (
    <Fragment>
      <Button onClick={onOpen}>
        <MenuIcon />
      </Button>
      <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
        <MenuItem onClick={onClose}>Home</MenuItem>
        <MenuItem onClick={onClose}>Service</MenuItem>
        <MenuItem onClick={onClose}>About</MenuItem>
      </Menu>
    </Fragment>
  );
};

export default CustomMenu;
