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

export const removeItemFromCart = (cartItems, itemToDelete) => {
  return cartItems.filter(item => item.id !== itemToDelete.id);
};

export const reduceOrRemoveItem = (cartItems, itemToReduceOrDelete) => {
  if (itemToReduceOrDelete.quantity === 1) {
    return removeItemFromCart(cartItems, itemToReduceOrDelete);
  }

  //reduce the quantity instead if the item's quantity > 1
  return cartItems.map(item =>
    item.id === itemToReduceOrDelete.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
