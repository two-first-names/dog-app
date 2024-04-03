import express, { Express } from 'express';
import { pino } from 'pino';

import bodyParser from 'body-parser';
import { indexRouter } from './routes';

const logger = pino();

const app: Express = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(indexRouter);

export { app, logger };