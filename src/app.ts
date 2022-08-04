import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import productRoute from './routes/product.route';
import userRoute from './routes/user.route';

const app = express();

app.use(express.json());

app.use('/products', productRoute);
app.use('/users', userRoute);

app.use(httpErrorMiddleware);

export default app;
