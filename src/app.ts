import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

export default app;
