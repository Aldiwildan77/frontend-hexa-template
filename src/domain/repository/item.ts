import { Item } from '../entity/item';

export interface ItemRepository {
  getItems: () => Promise<Item[]>;
  getItem: (id: number) => Promise<Item>;
}
