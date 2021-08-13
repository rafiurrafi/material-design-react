import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const styles = (theme) => ({
  card: {
    maxWidth: 400,
  },
  cardMedia: {
    width: "100%",
    height: "70vh",
  },
  iconButton: {
    transition: "1s",
    "&:hover": {
      background: "red",
      color: "white",
    },
  },
});

const MainContent = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      {/* <CardHeader
        title="Rafiur Rahman"
        subheader="Frontend Developer"
        avatar={
          <Avatar>
            <PersonIcon />
          </Avatar>
        }
      /> */}
      <CardMedia
        className={classes.cardMedia}
        title="Ad"
        image="https://images.unsplash.com/photo-1570817729975-6087b25951da?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <CardContent disableActionSpacing>
        <Typography variant="caption">Joined 2009</Typography>
        <Typography>
          Some filler text about the user. There doesn't have to be a lot - just
          enough so that the text spans at least two lines.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton className={classes.iconButton}>
          <ContactMailIcon />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <ContactPhoneIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(MainContent);
