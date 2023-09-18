import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if(!token)
        return res.status(401).send('acces denied. Not authenticated...')
    try{
        const jwtSceretKey = process.env.TOKEN_SECRET;
        const decoded = jwt.verify(token, jwtSceretKey);

        req.user = decoded;
        next();
    }catch(ex){
        res.status(400).send("invalid auth token")
    }
};

//For user Profile 
export const isUser = (req, res, next) => {
    auth(req, res, () => {
        if( req.user.id === req.param.id ){
            next();
        }else{
            res.status(403).send("acces denied. Not autherized")
        }
    })
};

//for admin 
export const isAdmin = (req, res, next) => {
    auth(req, res, () => {
      if (req.user.role === "admin") { 
        next();
      } else {
        res.status(403).send('Access denied. Not authorized');
      }
    });
  };

