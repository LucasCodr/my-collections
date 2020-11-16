import { inject, injectable } from 'tsyringe';
import ICreateCollectionDTO from '../dtos/ICreateCollectionDTO';
import Collection from '../infra/typeorm/entities/Collection';
import ICollectionsRepository from '../repositories/ICollectionsRepository';

@injectable()
class CreateCollectionService {
  constructor(
    @inject('CollectionsRepository')
    private collectionsRepository: ICollectionsRepository,
  ) { }

  async execute({ title, description, total_volumes }: ICreateCollectionDTO): Promise<Collection> {
    return this.collectionsRepository.create({ title, description, total_volumes })
  }
}

export default CreateCollectionService;
