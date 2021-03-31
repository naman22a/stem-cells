import express , { Request , Response} from 'express';
import title from '../title';

export const getIndex = (req: Request, res: Response) => {
  res.render("index", {
    title: title
  });
}