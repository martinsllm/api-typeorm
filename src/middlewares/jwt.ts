import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

const sign = (payload: { id: number, email: string }) => {
    const jwtConfig: SignOptions = {
        algorithm: 'HS256',
        expiresIn: '6h'
    }

    return jwt.sign(payload, secret, jwtConfig);
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization');
        if(!token) return res.status(401).json({ message: 'Unauthorized!'})

        const decoded = jwt.verify(token, secret);

        res.locals.user = decoded;

        next()
    } catch (error) {
        next(error)
    }
}

export { sign, verifyToken };