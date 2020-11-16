import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateCollectionService from '@modules/collections/services/CreateCollectionService';

export default class CollectionsController {
  async index(request: Request, response: Response): Promise<Response> {
    const { title, description, total_volumes } = request.body;

    const createCollectionService = container.resolve(CreateCollectionService);

    const collection = await createCollectionService.execute({
      title,
      description,
      total_volumes,
    })

    return response.json(collection);
  }
}
