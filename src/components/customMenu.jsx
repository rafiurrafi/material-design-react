import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const CustomMenu = (props) => {
  const onOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [items, setItems] = useState([
    { name: "First", onClick: onClose },
    { name: "Second", onClick: onClose },
    { name: "Third", onClick: onClose },
    { name: "Fourth", onClick: onClose, disabled: true },
  ]);

  return (
    <Fragment>
      <Button onClick={onOpen}>
        Menu
        <MenuIcon className={classes.rightIcon} />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick} disabled={item.disabled}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default CustomMenu;
