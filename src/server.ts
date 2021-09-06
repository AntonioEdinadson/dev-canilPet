import express from 'express';
import dotenv from 'dotenv';
import ejs from 'ejs';
import path from 'path';
import morgan from 'morgan';

import routes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.static(path.join(__dirname, 'public')));
server.use(express.urlencoded({ extended: true}));
server.use(express.json());

server.use(morgan('dev'));
server.use(routes);

server.use((req, res) => {
    res.send('Pagina não encontrada');
});

server.listen(process.env.PORT || 3000, () => { 
    console.log("rodando na porta " + process.env.PORT)
});