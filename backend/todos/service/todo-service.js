const config = require('../../config');
const ESClient = require('../../server/esclient');
const INDEX = config.indexes.todo;
const TYPE = 'todo';
const client = new ESClient(INDEX, TYPE);

const index = async (todo, id) => {
  const resp = await client.index({ body: todo, id });
  return { ...todo, id: resp._id };
};

const list = () => {
  return client
    .onResults(resp => resp.hits.hits.map(h => ({ ...h._source, id: h._id })))
    .search({ size: 1000 });
};

module.exports = {
  index,
  list,
  del: client.delete.bind(client),
  get: client.get.bind(client)
};
