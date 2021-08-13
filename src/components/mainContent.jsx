import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  card: {
    maxWidth: 400,
    margin: theme.spacing(4),
  },
  cartContent: {
    padding: 0,
  },
  content: {
    marginTop: theme.spacing(2),
  },
});

const MainContent = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cartContent}>
        <Typography variant="h4">Main title</Typography>
        <Typography variant="subtitle">A little more about subject</Typography>
        <Typography className={classes.content}>
          Even more information on the subject, contained within the card. You
          can fit a lot of information here, but don't try to overdo it.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(MainContent);
