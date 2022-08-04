import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/user.interface';
import connection from './connection';

const create = async (user: IUser): Promise<IUser> => {
  const { username, classe, level, password } = user;
  const query = `INSERT INTO Trybesmith.Users 
                (username, classe, level, password) 
                VALUES (?, ?, ?, ?)`;

  const values = [username, classe, level, password];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newUser: IUser = { id, username, classe, level, password };
  return newUser;
};

export default { create };
