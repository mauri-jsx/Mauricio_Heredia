import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";

const ordersRouter = Router();


ordersRouter.get("/orders", getOrdersCtrl);


ordersRouter.post("/orders", createOrderCtrl);

export { ordersRouter };
