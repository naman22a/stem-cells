import express , { Request , Response} from 'express';
import title from '../title';

export const getFitnessFunda = (req: Request, res: Response) => {
  res.render("fitness funda", {
    title: title
  });
}