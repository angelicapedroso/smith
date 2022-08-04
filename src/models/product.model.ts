import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/product.interface';
import connection from './connection';

const create = async (product: IProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = result;
  const newProduct: IProduct = { id, name, amount };
  return newProduct;
};

export default { create };
