import express , { Request , Response} from 'express';
import title from '../title';

export const getBmiCalculator = (req: Request, res: Response) => {
  res.render("bmi calculator", {
    title: title
  });
}