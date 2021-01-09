import ICreateCollectionDTO from '../dtos/ICreateCollectionDTO';
import Collection from '../infra/typeorm/entities/Collection';

export default interface ICollectionsRepository {
  findAll(): Promise<Collection[]>;
  findByName(name: string): Promise<Collection | undefined>;
  create(data: ICreateCollectionDTO): Promise<Collection>;
}
