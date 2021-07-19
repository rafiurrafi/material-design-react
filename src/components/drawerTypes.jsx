import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const DrawerTypes = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <Grid container justify="space-between">
      <Grid item>
        <Drawer variant="temporary" open={open} onClose={() => setOpen(false)}>
          <List>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemText>About</ListItemText>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemText>Contact</ListItemText>
            </ListItem>
          </List>
          <a onClick={() => setOpen(false)}>X</a>
        </Drawer>
      </Grid>
      <Grid item>
        <Button onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"}</Button>
      </Grid>
    </Grid>
  );
};

export default DrawerTypes;
