import { Router } from 'express';
import CollectionsController from '../controllers/CollectionsController';

const collectionsRouter = Router();

collectionsRouter.post('/', new CollectionsController().index);

export default collectionsRouter;
