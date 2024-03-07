import prisma from '../../prisma/prisma';
import express from 'express';
const router = express.Router();

// add post
router.post('/', async (req, res) => {
	const data = {
		title: req.body.title,
		content: req.body.content,
		published: true,
		authorId: req.body.authorId,
	}
	try {
		const post = await prisma.post.create({
			data,
		});
		//check return value
		if (!post) {
	      res
	        .status(400)
	        .json({ message: 'post create error.' });
	      return;
	    }

	    res.status(200).json({post: post, message: "new post created."});
	} catch (err) {
		res.status(400).json(err)
	}
});

//get all the posts
router.get('/', async (req, res) => {
	const posts = await prisma.post.findMany();
	res.status(200).json({posts: posts, message: "get all the posts."});
});

// get posts by id

// add comment


export default router;