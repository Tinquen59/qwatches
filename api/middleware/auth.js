import jwt from "jsonwebtoken";

/**
 * checks if user is authentified
 */
export default (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const { userId } = decodedToken;
        if (req.body.userId && req.body.userId !== userId)
            throw "User Id invalid";
        else
            next();
    } catch (error) {
        res.status(401).json({ error: error | "unauthenticated request" })
    }
};