import { autoInjectable } from 'tsyringe';
import type { ItemRepository } from '../repository/item';

@autoInjectable()
export class ItemService {
  itemRepository: ItemRepository;

  constructor(itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  getItems() {
    return this.itemRepository.getItems();
  }

  getItem(id: number) {
    return this.itemRepository.getItem(id);
  }
}
