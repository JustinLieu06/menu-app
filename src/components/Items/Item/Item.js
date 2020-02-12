import React, { Component } from 'react';
import classes from './Item.module.css';

class Item extends Component {
  render(){
    console.log(this.props.info);
    let menuItem = null;
    menuItem = (
      <div className={classes.Item}>
        <div className={classes.Title}>{this.props.info.title} </div>
        <div>{this.props.info.description} </div>
        <div>${this.props.info.price} </div>
      </div>
    )
    return menuItem;
  }
};

export default Item;