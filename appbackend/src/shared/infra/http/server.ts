import 'reflect-metadata';
import 'express-async-errors';
import '../../container';
import express, { json } from 'express';
import routes from './routes';
import '../typeorm';
import AppError from '@shared/errors/AppError';

const app = express();

app.use(json());
app.use(routes);

// @ts-ignore
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    // @ts-ignore
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  // @ts-ignore
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Server running...');
});
