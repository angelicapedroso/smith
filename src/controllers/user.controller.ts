import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const create = async (req: Request, res: Response) : Promise<Response> => {
  const result = await userService.create(req.body);
  return res.status(201).json(result);
};

export default create;
