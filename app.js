const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/app.html');
});

http.listen(3000, () => {
  console.log('waiting in vain for your love...');
});
