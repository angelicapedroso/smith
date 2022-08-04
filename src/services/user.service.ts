import { IUser } from '../interfaces/user.interface';
import userModel from '../models/user.model';
import generateJWT from '../utils/tokenJWT';

export const create = async (user: IUser) => {
  const result = await userModel.create(user);
  const { password, ...values } = result;
  const token = generateJWT(values);
  return token;
};

export default create;
