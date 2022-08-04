import { Request, Response } from 'express';
import * as productService from '../services/product.service';

export const create = async (req: Request, res: Response) : Promise<Response> => {
  const result = await productService.create(req.body);
  return res.status(201).json(result);
};

export const getAll = async (req: Request, res: Response) : Promise<Response> => {
  const result = await productService.getAll();
  return res.status(200).json(result);
};
