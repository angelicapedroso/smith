import orderModel from '../models/order.model';

const getAll = async () => {
  const result = await orderModel.getAll();
  return result;
};

export default { getAll };
