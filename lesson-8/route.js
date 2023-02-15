import express from "express";
import { getAllPets, addNewPet, getPetByType, getPetByAgeDescending } from "./controller.js";

const router = express.Router();

router.get('/pets', getAllPets);

router.post('/pets', addNewPet);

router.get('/pets/:type', getPetByType);

router.get('/pets/:byoldest', getPetByAgeDescending);

export default router;