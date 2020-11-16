import { getRepository, Repository } from 'typeorm';
import ICreateCollectionDTO from '@modules/collections/dtos/ICreateCollectionDTO';
import ICollectionsRepository from '@modules/collections/repositories/ICollectionsRepository';
import Collection from '../entities/Collection';

class CollectionsRepository implements ICollectionsRepository {
  private ormRepository: Repository<Collection>;

  constructor() {
    this.ormRepository = getRepository(Collection);
  }

  async create(data: ICreateCollectionDTO): Promise<Collection> {
    const collection = this.ormRepository.create(data);

    await this.ormRepository.save(collection);

    return collection;
  }

  async findAll(): Promise<Collection[]> {
    return this.ormRepository.find();
  }

  async findById(id: string): Promise<Collection | undefined> {
    const collection = this.ormRepository.findOne({
      where: id,
    })

    return collection;
  }
}

export default CollectionsRepository;
