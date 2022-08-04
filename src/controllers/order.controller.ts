import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const result = await orderService.getAll();
  return res.status(200).json(result);
};

export default { getAll };
