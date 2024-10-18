import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import { load } from 'cheerio';
import 'dotenv/config';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/', async (_req: Request, res: Response) => {
  console.log('hello');

  return res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
