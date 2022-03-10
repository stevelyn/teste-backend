const Item = require('../models/item.model');
const splitDecimals = require('./splitDecimals.util');

function getItems(results) {
  let items = []

  for (let i = 0; i < 4; i++) {
    const {amount, decimals} = splitDecimals(results[i].price)
    let item = new Item(results[i].id, results[i].title, results[i].currency_id, amount, decimals, results[i].thumbnail,
      results[i].condition, results[i].shipping.free_shipping, results[i].sold_quantity, '', results[i].address.state_name)
    items.push(item)
  }
  return items
}

module.exports = getItems