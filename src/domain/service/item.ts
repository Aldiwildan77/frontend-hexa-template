import { ItemRepository } from '../repository/item';

export const ItemService = (itemRepository: ItemRepository) => ({
  getItems: () => itemRepository.getItems(),
  getItem: (id: number) => itemRepository.getItem(id),
});
