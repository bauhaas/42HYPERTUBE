export default {
  "swagger": "2.0",
  "info": {
    "title": "Hypertube API",
    "version": "1.0.0"
  },
  "host": "localhost:3000",
  "basePath": "/",
  "schemes": ["http"],
  "paths": {
    "/users": {
      "get": {
        "tags": [
          "users"
        ],
        "summary": "Returns list of all users",
        "description": "Returns a list of users with their id and their username",
        "parameters": [
        ],
        "responses": {
        }
      }
    },
    "/users/{id}": {
      "get": {
        "tags": ["users"],
        "summary": "Returns details of a specific user",
        "description": "Returns username, email address, profile picture URL of a specific user",
        "produces": ["application/json"],
        "parameters": [
          {
            "name":"id",
            "in": "path",
            "required": true,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "$ref": "#/definitions/User"
            }
          },
          "400": {
            "description": "Invalid request"
          },
          "404": {
            "description": "Element not found"
          }
        }
      }
    },
    "/auth/facebook": {
      "get": {
        "tags": [
          "auth"
        ],
        "summary": "Authenticate with Facebook",
        "description": "Authenticate a user using Facebook.",
        "parameters": [
          // Facebook-specific parameters here
        ],
        "responses": {
          // Facebook-specific responses here
        }
      }
    },
    "/auth/google": {
      "get": {
        "tags": [
          "auth"
        ],
        "summary": "Authenticate with Google",
        "description": "Authenticate a user using Google.",
        "parameters": [
          // Google-specific parameters here
        ],
        "responses": {
          // Google-specific responses here
        }
      }
    },
    "/auth/42": {
      "get": {
        "tags": [
          "auth"
        ],
        "summary": "Authenticate with 42",
        "description": "Authenticate a user using 42.",
        "parameters": [
          // 42-specific parameters here
        ],
        "responses": {
          // 42-specific responses here
        }
      }
    },
    "/auth/github": {
      "get": {
        "tags": [
          "auth"
        ],
        "summary": "Authenticate with Github",
        "description": "Authenticate a user using Github.",
        "parameters": [
          // Github-specific parameters here
        ],
        "responses": {
          // Github-specific responses here
        }
      }
    }
  },
    "definitions": {
    "User": {
      "type": "object",
      "required": [
        "email"
      ],
      "properties": {
        "firstName": {
          "type": "string",
          "example": "John"
        },
        "lastName": {
          "type": "string",
          "example": "Doe"
        },
        "email": {
          "type": "string",
          "example": "john.doe@gmail.com",
        },
      }
    }
  }
}