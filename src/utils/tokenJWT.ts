import jwt from 'jsonwebtoken';

const SECRET = 'secret';

const generateJWT = (payload: object) => jwt.sign(payload, SECRET);

export default generateJWT;
