import { body } from "express-validator";

export const createOrderValidation = [
    body("coffee").isString(),
    body("quantity").isNumeric(),
];

export const updateOrderValidation = [
    body("coffee").isString(),
    body("quantity").isNumeric(),
];

export const deleteOrderValidation = [
    body("id").isString(),
];
