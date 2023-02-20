export default {
  "swagger": "2.0",
  "info": {
    "title": "Example API",
    "version": "1.0.0"
  },
  "host": "localhost:3000",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/": {
      "get": {
        "description": "Returns Hello World",
        "responses": {
          "200": {
            "description": "Successful response",
            "schema": {
              "type": "string",
              "example": "Hello World!"
            }
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
  }
}