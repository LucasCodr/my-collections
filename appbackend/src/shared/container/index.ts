import CollectionsRepository from '@modules/collections/infra/typeorm/repositories/CollectionsRepository';
import ICollectionsRepository from '@modules/collections/repositories/ICollectionsRepository';
import { container } from 'tsyringe';

container.registerSingleton<ICollectionsRepository>(
  'CollectionsRepository',
  CollectionsRepository,
)
