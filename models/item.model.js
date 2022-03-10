const parse = require("nodemon/lib/cli/parse");

class Item {
  constructor(id, title, currency, amount, decimals, picture, condition, isFreeShipping, sold_quantity, description, state_name) {
    this.id = id,
      this.title = title,
      this.price = {
        currency: currency,
        amount: amount,
        decimals: decimals || 0,
      },
    this.picture = picture,
      this.condition = condition,
      this.free_shipping = isFreeShipping,
      this.sold_quantity = sold_quantity,
      this.description = description,
      this.state_name = state_name || '';
  }
};

module.exports = Item;