import express from 'express';
import prisma from '../prisma/prisma';

const router = express.Router();

router.get('/', async(req, res) => {
	console.log('index')
	res.render('pages/index');
});

export default router;