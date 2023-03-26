const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files with caching headers
  server.use('/static', express.static(path.join(__dirname, 'static'), {
    maxAge: dev ? '0' : '365d',
    immutable: true
  }));

  // Serve Next.js pages
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://uwatch4free.netlify.app/:${port}`);
  });
});
