import { Item } from '../../../domain/model/item';
import { ItemRepository } from '../../../domain/repository/item';
import { Http } from '../../../pkg/http/http';
import { Item as ItemDTO } from './dto';

export const ItemRepositoryImpl = (http: Http): ItemRepository => ({
  getItems: async () => {
    const items = await http.get<ItemDTO[]>('/items');
    return items.map(
      (item: ItemDTO): Item => ({
        id: item.id,
        name: item.name,
        description: item.description,
      }),
    );
  },
  getItem: async (id: number) => {
    const item = await http.get<ItemDTO>(`/items/${id}`);
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
    };
  },
});
