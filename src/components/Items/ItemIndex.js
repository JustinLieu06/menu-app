import React from 'react';
import classes from './ItemIndex.module.css';
// import DATA from '../../data';
import Item from './Item/Item';

const ItemIndex = (props) => {

  let itemArray = null;
  let totalItems = 0;
  let categoryName = null;
  categoryName = "Category Name Placeholder"
  categoryName = props.data[0].brands[0].storeGroups[0].stores[0].menus[0].campaignMenuAudits[0].items[0].categories.title;

  // itemArray = props.data.map(dataObj => {
  //   return Object.keys(dataObj).map(brandKeys => {
  //     return dataObj[brandKeys].map(brandObj) => {
  //       return brandObj.storeGroups.map(storeGroupObj => {
  //         return Object.keys(storeGroupObj).map(storeGroupKeys) => {
  //           return storeGroupObj[storeGroupKeys].map(sto) => {
  //             return 
  //           }
  //         }
  //       })
  //     }
  //   })
  // })

  itemArray = props.data[0].brands[0].storeGroups[0].stores[0].menus[0].campaignMenuAudits[0].items.map((itemObj, i) =>{
    totalItems++;
    return <Item info={itemObj} key={i} />
  })

  return (
    <div className={classes.ItemIndex}>
      <div>{categoryName}</div>
      <div>Showing {totalItems} Items</div>
      {itemArray}
    </div>
  );
}

export default ItemIndex;