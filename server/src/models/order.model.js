import crypto from "crypto";

let ordersCollection = [];

//* Crear una orden
export const createOrder = (coffee, userId) => {
  const newOrder = {
    id: crypto.randomUUID().toString(),
    coffee,
    userId,
  };

  ordersCollection.push(newOrder);

  return newOrder;
};

//* Obtener todas las ordenes
export const getOrders = (userId) => {
  return ordersCollection.filter((coffee) => coffee.userId === userId);
};

//* Obtener orden por ID
export const getOrderById = (id, userId) => {
  return (
    ordersCollection.find((coffee) => coffee.id === id) ||
    ordersCollection.find(
      (coffee) => coffee.id === id && coffee.userId === userId
    ) || null
  );
};

//* Eliminar orden
export const deleteOrderById = (id, userId) => {

  const deletedOrder = ordersCollection.find(
    (coffee) => coffee.id === id && coffee.userId === userId
  );
  ordersCollection = ordersCollection.filter(
    (coffee) => coffee.id !== id && coffee.userId === userId
  );
  ordersCollection.push(deletedOrder);
  return deletedOrder;
};
