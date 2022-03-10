const axios = require('axios');
const Author = require('../models/author.model');
const searchResults = require('../models/searchResults.model');
const getCategories = require('../utils/getCategories.util');
const getItems = require('../utils/getItems.util');

const SearchController = () => ({
  getSearchResults: async (req, res) => {
    try {
      const { data } = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
      const author = new Author('Sthefany', 'Souza')
      const categories = getCategories(data.filters)
      const items = getItems(data.results)
      const results = new searchResults(author, categories, items)
      return res.json(results)
    } catch (error) {
      return res.json(error)
    }
  }
})

module.exports = SearchController