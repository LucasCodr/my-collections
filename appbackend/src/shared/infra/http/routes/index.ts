import collectionsRouter from '@modules/collections/infra/http/routes/collections.route';
import Router from 'express';

const routes = Router();

routes.use('/new_collection', collectionsRouter);

export default routes;
