import express , { Request , Response} from 'express';
import title from '../title';

export const getBibliography = (req: Request, res: Response) => {
  res.render("bibliography", {
    title: title
  });
}