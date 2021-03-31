import express , { Request , Response} from 'express';
import title from '../title';

export const getStemCells = (req: Request, res: Response) => {
  res.render("stem cells", {
    title: title
  });
}