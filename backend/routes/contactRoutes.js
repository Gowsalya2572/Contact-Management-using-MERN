import express from "express";
import { allContacts, createContacts, deleteContact, searchContacts, updateContact } from "../controllers/contactControllers.js";

const router =express.Router();

router.post('/create', createContacts);

router.get('/', allContacts);

router.get('/search', searchContacts);

router.put('/:id',updateContact);

router.delete('/:id',deleteContact);

export default router;