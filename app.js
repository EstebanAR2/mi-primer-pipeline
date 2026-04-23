function sumar(a, b) {
  return a + b;
}

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ mensaje: 'Hola Mundo DevOps', resultado: sumar(2, 3) }));
});

server.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));

module.exports = { sumar };
