import React from 'react';
import classes from './TopNavBar.module.css';

const TopNavBar = (props) => {
  let restaurantName = "Restaurant Name";
  let address = "placeholder"
  return (
    <div className={classes.TopNavBar}>
      <div>{restaurantName}</div>
      <div>{address}</div>
    </div>
  )
};

export default TopNavBar;