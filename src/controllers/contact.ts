import express , { Request , Response} from 'express';
import title from '../title';

// importing contact model
import Contact from '../models/contacts';

export const getContact = (req: Request, res: Response) => {
  res.render("contact", {
    title: title
  });
}

export const postContact = async (req: Request, res: Response) => {
  try {
		const contact = new Contact({
			name: req.body.name,
			email: req.body.email,
			message: req.body.message,
		});

		const send = await contact.save();

		res.status(201).render('index');
	} catch (error) {
		console.log(error);
		res.status(400).send(error).render('index');
	}
}