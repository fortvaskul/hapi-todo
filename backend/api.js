const sampleRoute = require('./samples/routes/sample-routes');
const todoRoute = require('./todos/routes/todos-routes');

exports.plugin = {
  pkg: require('./package.json'),
  register: async function (server, options) {
    sampleRoute(server);
    todoRoute(server);
  }
};
