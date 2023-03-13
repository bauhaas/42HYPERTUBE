export default {
  swagger: '2.0',
  info: {
    title: 'Hypertube API',
    version: '1.0.0',
  },
  host: `localhost:${process.env.PORT || 3000}`,
  basePath: '/',
  schemes: ['http'],
  paths: {
    '/users': {
      get: {
        tags: ['users'],
        summary: 'Returns list of all users',
        description: 'Returns a list of users with their id and their username',
        parameters: [],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/User',
              },
            },
          },
          400: {
            description: 'Invalid request',
          },
          404: {
            description: 'Element not found',
          },
        },
      },
      post: {
        tags: ['users'],
        summary: 'Create a new user',
        description: '',
        parameters: [
          {
            name: 'firstName',
            in: 'formData',
            required: true,
            type: 'string',
            default: 'John',
          },
          {
            name: 'lastName',
            in: 'formData',
            required: true,
            type: 'string',
            default: 'Doe',
          },
          {
            name: 'email',
            in: 'formData',
            required: true,
            type: 'string',
            default: 'john.doe@example.com',
          },
          {
            name: 'password',
            in: 'formData',
            required: true,
            type: 'string',
            default: 'root123Q!',
          },
        ],
        responses: {
          201: {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/User',
            },
          },
          400: {
            description: 'Invalid request',
          },
          404: {
            description: 'Element not found',
          },
        },
      },
    },
    '/users/{id}': {
      get: {
        tags: ['users'],
        summary: 'Returns details of a specific user',
        description:
          'Returns username, email address, profile picture URL of a specific user',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/User',
            },
          },
          400: {
            description: 'Invalid request',
          },
          404: {
            description: 'Element not found',
          },
        },
      },
      patch: {
        tags: ['users'],
        summary: 'Update details of a specific user [TO COMPLETE]',
      },
    },
    '/movies': {
      get: {
        tags: ['movies'],
        summary: 'Returns list of all movies',
        description: 'Authenticate a user using Github.',
        parameters: [],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Movies',
              },
            },
          },
          400: {
            description: 'Invalid request',
          },
          404: {
            description: 'Element not found',
          },
        },
      },
    },
    '/movies/{id}': {
      get: {
        tags: ['movies'],
        summary: 'Rerturns details of a specific movie',
        description: 'Authenticate a user using Github.',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/Movies',
            },
          },
          400: {
            description: 'Invalid request',
          },
          404: {
            description: 'Element not found',
          },
        },
      },
    },
    '/comments': {
      post: {
        tags: ['comments'],
        summary: 'Add a comment about a specific movie',
        description: '',
        parameters: [
          {
            name: 'content',
            in: 'formData',
            required: true,
            type: 'string',
            default: 'What a movie',
          },
          {
            name: 'UserId',
            in: 'formData',
            required: true,
            type: 'integer',
            default: '1',
          },
          {
            name: 'MovieId',
            in: 'formData',
            required: true,
            type: 'integer',
            default: '1',
          },
        ],
        responses: {
          201: {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/Comments',
            },
          },
          400: {
            description: 'Invalid request',
          },
          404: {
            description: 'Element not found',
          },
        },
      },
      get: {
        tags: ['comments'],
        summary: 'Returns all the comments',
        description: '',
        parameters: [],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Comments',
              },
            },
          },
          400: {
            description: 'Invalid request',
          },
        },
      },
    },
    '/comments/movies/{id}': {
      get: {
        tags: ['comments'],
        summary: 'Returns all the comment of the movie {id}',
        description:
          'Returns a list of all the comments linked to a movie, it should be ordered with the most recents first',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'integer',
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Comments',
              },
            },
          },
          400: {
            description: 'Invalid request',
          },
          404: {
            description: 'Element not found',
          },
        },
      },
    },
  },
  definitions: {
    User: {
      type: 'object',
      required: ['email'],
      properties: {
        firstName: {
          type: 'string',
          example: 'John',
        },
        lastName: {
          type: 'string',
          example: 'Doe',
        },
        email: {
          type: 'string',
          example: 'john.doe@example.com',
        },
      },
    },
    Movies: {
      type: 'object',
      required: [],
      properties: {
        title: {
          type: 'string',
          example: 'MovieTitle',
        },
      },
    },
    Comments: {
      type: 'object',
      required: ['authorId', 'movieId'],
      properties: {
        authorId: {
          type: 'integer',
          example: '1',
        },
        movieId: {
          type: 'integer',
          example: '1',
        },
        content: {
          type: 'string',
          example: 'What a movie',
        },
      },
    },
  },
};
