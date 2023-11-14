const hapi = require('@hapi/hapi');
const inert = require('@hapi/inert');
const path = require('path');

const init = async () => {
  const server = hapi.server({
    host: 'localhost',
    port: 8080
  });

  // Register the inert plugin to handle static files
  await server.register(inert);

  server.route({
    method: 'GET',
    path: '/',
    handler: {
      file: path.join(__dirname, 'index.html')
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
