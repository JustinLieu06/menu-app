import React from 'react';
import classes from './TopNavBar.module.css';

const TopNavBar = (props) => {
  let restaurantName = "Restaurant Name Placeholder";
  restaurantName = props.data[0].brands[0].name;
  let address = "Address Placeholder"
  address = props.data[0].brands[0].storeGroups[0].stores[0].address;
  return (
    <div className={classes.TopNavBar}>
      <div>{restaurantName}</div>
      <div>{address}</div>
    </div>
  )
};

export default TopNavBar;