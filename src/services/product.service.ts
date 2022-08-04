import { IProduct } from '../interfaces/product.interface';
import * as productModel from '../models/product.model';

export const create = async (product: IProduct) => {
  const result = await productModel.create(product);
  return result;
};

export const getAll = async () => {
  const result = await productModel.getAll();
  return result;
};
