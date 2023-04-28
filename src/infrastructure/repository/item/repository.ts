import { autoInjectable } from 'tsyringe';
import { Item } from '../../../domain/entity/item';
import { ItemRepository } from '../../../domain/repository/item';
import type { Http } from '../../http/http';
import { Item as ItemDTO } from './dto';

@autoInjectable()
export class ItemRepositoryImpl implements ItemRepository {
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getItems = async () => {
    const items = await this.http.get<ItemDTO[]>('/items');
    return items.map(
      (item: ItemDTO): Item => ({
        id: item.id,
        name: item.name,
        description: item.description,
      }),
    );
  };

  getItem = async (id: number) => {
    const item = await this.http.get<ItemDTO>(`/items/${id}`);
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
    };
  };
}
