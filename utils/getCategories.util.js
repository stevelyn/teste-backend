function getCategories(filters) {
  const values = filters[0].values
  const path = values.map(values => { return values.path_from_root })
  const categories = []
  for (let i = 0; i <= path.length; i++) {
    const categoriesNames = path.map(path => { return path[i].name }).join('[', ']')
    categories.push(categoriesNames)
  }
  return categories;
}

module.exports = getCategories

