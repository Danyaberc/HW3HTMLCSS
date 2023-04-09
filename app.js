// --------------------------------------------------------------------------------
// const express = require('express')
// const app = express();

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/index.html')
// });

// app.listen(3000, () => {
//    console.log('RUN!!!')
// })
// -------------------------------------------------------------------------------------
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//    // обработчик для главной страницы
//    if (req.url === '/' || req.url === '/index.html') {
//       // читаем файл index.html
//       fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
//          if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//             return;
//          }
//          // отдаем файл index.html с HTTP заголовками
//          res.writeHead(200, { 'Content-Type': 'text/html' });
//          res.end(data);
//       });
//    }
//    // обработчик для стилей
//    else if (req.url === '/styles/main.css') {
//       // читаем файл main.css
//       fs.readFile(path.join(__dirname, '/styles/main.css'), (err, data) => {
//          if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/css' });
//             res.end('Internal Server Error');
//             return;
//          }
//          // отдаем файл main.css с HTTP заголовками
//          res.writeHead(200, { 'Content-Type': 'text/css' });
//          res.end(data);
//       });
//    }
//    // обработчик для неизвестных маршрутов
//    else {
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       res.end('Not Found');
//    }
// });

// server.listen(3000, () => {
//    console.log('Server is running on http://localhost:3000');
// });
// ------------------------------------------------------------------------
// Створення змінних та вкладання в них встроєнних модулів
const http = require('http');
const fs = require('fs');
const url = require('url')

const arr = [
   { id: '/1', text: 'text1' },
   { id: '/2', text: 'text2' }
];

const server = http.createServer((req, res) => {
   const item = arr.find((item) => item.id === req.url);
   if (item) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(item.text);
   } else if (req.url === '/' || req.url === '/index.html') {
      fs.readFile('index.html', (err, data) => {
         if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
         }
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.end(data);
      });
   } else if (req.url === '/styles/main.css') {
      fs.readFile('./styles/main.css', (err, data) => {
         if (err) {
            res.writeHead(500, { 'Content-Type': 'text/css' });
            res.end('Internal Server Error');
            return;
         }
         res.writeHead(200, { 'Content-Type': 'text/css' });
         res.end(data);
      });
   } else if (req.url === '/img/catalog.jpg') {
      fs.readFile('./img/catalog.jpg', (err, data) => {
         if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
         }
         res.setHeader('Content-Type', 'image/jpeg');
         res.end(data);
      });
   } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('SHO TI TUT ZABUV IDI GULYAU!!!');
   }
});

server.listen(3000, () => {
   console.log('ПРАЦЮЄ!!!');
});
// -------------------------------------------------------------------------