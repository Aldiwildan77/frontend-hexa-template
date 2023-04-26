import { Item } from '../model/item';

export interface ItemRepository {
  getItems: () => Promise<Item[]>;
  getItem: (id: number) => Promise<Item>;
}
