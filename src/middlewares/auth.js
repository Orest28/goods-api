import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, 'TOKEN_SECRET');
        const userId = decodedToken.userId;
        if(req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    }catch {
        res.status(401).json({
            error: 'Invalid request',
        });
    }
};

export default {auth};