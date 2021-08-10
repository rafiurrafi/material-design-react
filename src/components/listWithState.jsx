import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ListWithState = (props) => {
  const [items] = useState([
    { name: "Honda", timeStamp: new Date(), selected: true },
    { name: "Pulsar", timeStamp: new Date() },
    { name: "BMW", timeStamp: new Date() },
  ]);
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index} button>
          <ListItemText
            primary={item.name}
            sesondary={item.timeStamp.toLocaleString()}
            primaryTypographyProps={item.selected ? true : undefined}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ListWithState;
