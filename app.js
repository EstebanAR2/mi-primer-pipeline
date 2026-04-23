function sumar(a, b) {
  return a + b;
}

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ mensaje: 'Hola Mundo DevOps', resultado: sumar(2, 3) }));
});

server.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

module.exports = { sumar };
