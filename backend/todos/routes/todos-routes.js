const Joi = require('joi');
const todoService = require('../service/todo-service');

module.exports = function (server) {
  server.route({
    path: '/todos',
    method: 'GET',
    handler(req, h) {
      return todoService.list();
    },
    options: {
      description: 'Gets the list of Todos',
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  });

  server.route({
    path: '/todos',
    method: 'POST',
    handler(req, h) {
      return todoService.index(req.payload);
    },
    options: {
      description: 'Create a Todo',
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      },
      validate: {
        payload: {
          content: Joi.object().required(),
        },
        failAction: async (request, h, err) => { throw err; }
      }
    }
  });

  server.route({
    path: '/todos/{id}',
    method: 'PUT',
    handler(req, h) {
      const { id, ...todo } = req.payload;
      return todoService.index(todo, req.params.id);
    },
    options: {
      description: 'Edit a Todo',
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      },
      validate: {
        params: {
          id: Joi.string().required()
        },
        payload: {
          content: Joi.object().required(),
        }
      }
    }
  });

  server.route({
    path: '/todos/{id}',
    method: 'DELETE',
    handler(req, h) {
      return todoService.del(req.params.id);
    },
    options: {
      description: 'Delete a Todo',
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  });
}
