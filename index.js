// подключаем основные модули
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const server = http.createServer(app);


// непонятно
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// настраиваем логгер и парсинг данных
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//статика
app.use(express.static(path.join(__dirname, './public')));

// роуты
app.use('/', require('./routes/index'));

// запускаем сервер
app.listen(3000, function () {
  console.log("Сервер слушает на порту 3000.");
})
