import express from "express";
import { deleteEvent, getAllEvents, getMyEvents, PostEvent, updateEvent } from "../controllers/EventController.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall", getAllEvents);
router.post("/post", isAuthorized, PostEvent);
router.get("/getMyEvents", isAuthorized, getMyEvents);
router.put("/update/:id", isAuthorized, updateEvent);
router.delete("/delete/:id", isAuthorized, deleteEvent);

export default router;