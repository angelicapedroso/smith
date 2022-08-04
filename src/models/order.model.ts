import { IOrder } from '../interfaces/order.interface';
import connection from './connection';

const getAll = async (): Promise<IOrder[]> => {
  const query = `
  SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
  FROM Trybesmith.Products as p
  INNER JOIN Trybesmith.Orders as o
  ON p.orderId = o.id
  GROUP BY o.id
  ORDER BY o.userId`;
  
  const [result] = await connection.execute(query);
  return result as IOrder[];
};

export default { getAll };
