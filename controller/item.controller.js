const axios = require('axios');
const Author = require('../models/author.model');
const chooseItem = require('../models/chooseItem.model');
const Item = require('../models/item.model');
const splitDecimals = require('../utils/splitDecimals.util');

const ItemController = () => ({
  getItem: async (req, res) => {
    try {
      const { data } = await axios(`https://api.mercadolibre.com/items/${req.params.id}`)
      const description = await axios(`https://api.mercadolibre.com/items/${req.params.id}/description`)
      const itemDescription = description.data.plain_text

      const author = new Author('Sthefany', 'Souza')
      const { amount, decimals } = splitDecimals(data.price)
      const item = new Item(data.id, data.title, data.currency_id, amount, decimals, data.pictures[0].url,
        data.condition, data.shipping.free_shipping, data.sold_quantity, itemDescription)
      const result = new chooseItem(author, item)

      return res.json(result)
    } catch (error) {
      return res.json(error)
    }
  }
})

module.exports = ItemController