import { commerce } from '../lib/commerce';

export const fetchFavorites = async () => {
  const { data } = await commerce.products.list({
    category_slug: 'favorite',
  });
  return data;
};

export const fetchProducts = async () => {
  const { data } = await commerce.products.list();
  return data;
};

export const fetchCart = async () => {
  return await commerce.cart.retrieve();
};

export const addToCart = async (id, quantity) => {
  const item = await commerce.cart.add(id, quantity);
  return item.cart;
};

export const handleEmptyCart = async () => {
  const response = await commerce.cart.empty();
  return response.cart;
};

export const refreshCart = async () => {
  return await commerce.cart.refresh();
};

export const handleUpdateCartQty = async (lineItemId, quantity) => {
  const response = await commerce.cart.update(lineItemId, { quantity });
  return response.cart;
};

export const handleRemoveFromCart = async (lineItemId) => {
  const response = await commerce.cart.remove(lineItemId);
  return response.cart;
};

export const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  try {
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    return incomingOrder;
  } catch (error) {
    throw error.data.error.message;
  }
};
