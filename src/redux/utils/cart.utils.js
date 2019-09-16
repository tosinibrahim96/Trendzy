export const addNewItemToCart = (existingItems, newItem) => {
  const newItemAlreadyExist = existingItems.find(oldItem => {
    return oldItem.id === newItem.id;
  });

  if (newItemAlreadyExist) {
    return existingItems.map(oldItem =>
      oldItem.id === newItem.id
        ? { ...oldItem, quantity: oldItem.quantity + 1 }
        : oldItem
    );
  }

  return [...existingItems, { ...newItem, quantity: 1 }];
};
