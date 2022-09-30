const server = require('express');

const app = server();
app.use(server.static(__dirname + '/public'));
app.listen(1202, () => console.log('Servidor corriendo...'));
