import 'dotenv/config';
import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

const sign = (payload: { id: number, email: string }) => {
    const jwtConfig: SignOptions = {
        algorithm: 'HS256',
        expiresIn: '6h'
    }

    return jwt.sign(payload, secret, jwtConfig);
}

export { sign };