import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabContent: {
    padding: theme.spacing.unit * 2,
  },
});
const AppbarIntegration = (props) => {
  const { classes } = props;
  const [value, setValue] = useState(0);
  const onChange = (e, value) => {
    setValue(value);
  };
  return (
    <div className={classes.root}>
      <AppBar>
        <Tabs value={value} onChange={onChange}>
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(AppbarIntegration);
