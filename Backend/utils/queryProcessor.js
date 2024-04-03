const QueryProcessor = (model,query) =>
{
    const processedQuery = {}
    Object.assign(processedQuery,query)
    const allowedKeys = Object.keys(model.getAttributes())

    for (const key in processedQuery) {
      if(!allowedKeys.includes(key))
  {
    delete processedQuery[key]
  }
    }

    return processedQuery
}

module.exports = QueryProcessor