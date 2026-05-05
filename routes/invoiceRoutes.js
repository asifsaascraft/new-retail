import express from "express";

import {
  getInvoiceByNumber,
} from "../controllers/billingController.js";


const router = express.Router();

/* ===========================
   PUBLIC ROUTES (NO AUTH)
=========================== */
router.get("/", getInvoiceByNumber);


export default router;
