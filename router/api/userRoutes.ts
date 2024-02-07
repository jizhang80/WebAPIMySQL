import prisma from '../../prisma/prisma';
import express from 'express';
const router = express.Router();

// get all the users
router.get('/', async (req, res) => {
	try {
		const user = await prisma.user.findMany();
		res.status(200).json({user: user, message: "get all users"});
	} catch (err) {
		res.status(400).json(err)
	}
});

// add user
router.post('/', async (req, res) => {
	const username = req.body.username;
	const email = req.body.email;
	try {
		const user = await prisma.user.create({
			data: {
				name: username,
				email: email,
			},
		});
		//check return value
		if (!user) {
	      res
	        .status(400)
	        .json({ message: 'user add error.' });
	      return;
	    }

	    res.status(200).json({user: user, message: "new user added."});
	} catch (err) {
		res.status(400).json(err)
	}
	
});


// get user by id
router.get('/:userId', async (req, res) => {
	const userId = +req.params.userId; // +convert userId from string to number
	const user = await prisma.user.findUnique({
		where:{
			id: userId,
		},
	});
	return user;
});

export default router;