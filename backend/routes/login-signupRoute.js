import express from 'express';
import {login, signup} from "../controllers/userController.js"

const router = express.Router(); 

router.route('/login').get(login);
router.route('/signup').post(signup);

export default router;