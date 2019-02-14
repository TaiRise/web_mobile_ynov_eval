module.exports = {
  swaggerDefinition: {
    info: {
      description: 'This is a Web News API',
      title: 'Web News API on NodeJS',
      version: '1.0.0',
    },
    host: 'localhost:8888',
    basePath: '/api',
    produces: [
      "application/json"
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "",
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/*.js'] //Path to the API handle folder
};