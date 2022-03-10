const express = require('express')
const app = express();
const cors = require('cors');
const SearchController = require('./controller/search.controller');
const ItemController = require('./controller/item.controller');

app.use(cors())

app.get('/api/items', SearchController().getSearchResults)

app.get('/api/items/:id', ItemController().getItem)

app.listen(9022)