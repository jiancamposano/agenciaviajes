import express from "express";
import { paginaInicio } from "../controllers/paginasController.js";
import { paginaNosotros } from "../controllers/paginasController.js";
import { paginaViajes } from "../controllers/paginasController.js";
import { paginaTestimoniales } from "../controllers/paginasController.js";
import { paginaDetalleViaje } from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);

export default router;
