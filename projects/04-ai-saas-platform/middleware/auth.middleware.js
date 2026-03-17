


async function authenticationMiddleware(req,res) {
    try {
        const tokenHeader = req.headers;
        if(!tokenHeader) {
            return next();
        }

        const payload = jwt.verify(tokenHeader, process.env.JWT_SECRET);

        req.userId = payload.userId;
        next();
    } catch (error) {
        console.error(error);
        return next();
    }
}