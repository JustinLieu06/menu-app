import React from 'react';
import classes from './ItemIndex.module.css';
import DATA from '../../data';
import Item from './Item/Item';

const ItemIndex = (props) => {
  // const itemArray = Object.keys(DATA.brands.stores.items.title)
  //   .map(titleKey => {
  //     return [...Array(DATA.brands.stores.items[titleKey])].map((_, i) => {
  //       return <div></div>
  //     })
  //   });
  // const itemArray = Object.keys(DATA[0])
  //   .map(brandKeys => {
  //     return Object.keys(DATA[0][brandKeys])
  //   });
  // itemArray = DATA.forEach(dataObj => {
  //   return Object.keys(dataObj).map(brandKeys => {
  //     return dataObj[brandKeys].forEach(brandObj => {
  //       return brandObj.storeGroups.forEach(storeObj => {
  //         return storeObj.menus.forEach(menuObj => {
  //           return menuObj.forEach(campaignMenuAudits => {
  //             return campaignMenuAudits.forEach(ItemObj) => {}
  //           })
  //         })
  //       })
  //     })
  //   });
  // })
  // itemArray = DATA[0].brands[0].storeGroups[0].stores[0].menus[0].campaignMenuAudits[0].items[0];

  let itemArray = null;
  let totalItems = 0;
  let categoryName = null;
  categoryName = "Category Name"

  itemArray = DATA[0].brands[0].storeGroups[0].stores[0].menus[0].campaignMenuAudits[0].items.map((itemObj, i) =>{
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