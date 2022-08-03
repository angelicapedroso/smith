import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middleware/http.error.middleware';

const app = express();

app.use(express.json());
app.use(httpErrorMiddleware);

export default app;
