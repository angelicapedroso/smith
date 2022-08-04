import { Request, Response } from 'express';
import productService from '../services/product.service';

const create = async (req: Request, res: Response) : Promise<Response> => {
  const result = await productService.create(req.body);
  return res.status(201).json(result);
};

export default { create };
