import express from "express";
import { customerCancelTicket, CustomerGetAllTickets, customerPurchaseTicket } from "../controllers/ticketController";
import { isAuthorized } from "../middlewares/auth";

const router = express.Router();

router.get("/customer/getall", isAuthorized, CustomerGetAllTickets);
router.delete("/delete/:id", isAuthorized, customerCancelTicket);
router.post("/purchaseticket", isAuthorized, customerPurchaseTicket);

export default router;