export const attachSessionData = (req, res, next) => {
    res.locals.userEmail = req.session.userEmail || null;
    res.locals.userName = req.session.userName || null;
    next();
};
