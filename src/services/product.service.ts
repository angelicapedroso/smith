import IProduct from '../interfaces/product.interface';
import productModel from '../models/product.model';

const create = async (product: IProduct) => {
  const result = await productModel.create(product);
  return result;
};

export default { create };
