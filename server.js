const Server = require('hapi').Server;
const server = new Server();
server.connection({port: 3000});

server.route({
  path: '/',
  method: 'GET',
  handler: function(request, reply){
      reply('Happy to be here!');
    }
});

server.start(function(err){
  if(err) {console.log(err)};
  let uri = server.info.uri;
  console.log(`server @ ${uri}`);
});
