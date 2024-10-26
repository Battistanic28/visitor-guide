import * as React from 'react';
import { Button } from '@mui/material';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

export default function RestaurantList({setMapFocus}) {
  return (
    <div>
      <List aria-labelledby="decorated-list-demo">
        <ListItem>
          <ListItemDecorator>🍕</ListItemDecorator> <Button onClick={() => setMapFocus("Audrey Jane's")}>Audrey Jane’s Pizza Garage</Button>- $$$ - Our favorite spot for a slice!
        </ListItem>
        <ListItem>
          <ListItemDecorator>🍕</ListItemDecorator> <Button>Urban Field Pizza and Market</Button>- $$ - Best square pizza around
        </ListItem>
        <ListItem>
          <ListItemDecorator>🍣</ListItemDecorator> <Button>AOI Sushi & Izakaya</Button>- $$$$ - Great sushi, on the refined side
        </ListItem>
        <ListItem>
          <ListItemDecorator>🌮</ListItemDecorator> <Button>Verde Boulder</Button>- $$ - Go to spot for tacos and burritos!
        </ListItem>
      </List>
    </div>
  );
}