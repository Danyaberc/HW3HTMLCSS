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

const server = http.createServer((req, res) => {
   // Обробка для головної сторінки
   if (req.url === '/' || req.url === '/index.html') {
      // Знаходимо та читаємо файл index.html
      fs.readFile('index.html', (err, data) => {
         if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
         }
         // Віддаємо файл index.html разом з заголовками
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.end(data);
      });
   }
   // Обробка цсс файлу
   else if (req.url === '/styles/main.css') {
      // Читаємо файл цсс
      fs.readFile('./styles/main.css', (err, data) => {
         if (err) {
            res.writeHead(500, { 'Content-Type': 'text/css' });
            res.end('Internal Server Error');
            return;
         }
         // Віддаємо файл цсс з http заголовками
         res.writeHead(200, { 'Content-Type': 'text/css' });
         res.end(data);
      });
   }
   else if (req.url === '/' || req.url === '/img/catalog.jpg') {
      fs.readFile('./img/catalog.jpg', (err, data) => {
         res.setHeader(200, { 'Content-Type': 'image/jpeg' });
         res.end(data)
      })
   }
   // Оброка для незнайомих маршрутів
   else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('SHO TI TUT ZABUV IDI GULYAU!!!');
   }
});

server.listen(3000, () => {
   console.log('ПРАЦЮЄ!!!');
});
// -------------------------------------------------------------------------