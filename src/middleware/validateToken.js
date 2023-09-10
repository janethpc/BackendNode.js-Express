import jwt from "jsonwebtoken";

export const authrequired = (req, res, next) => {
    const {token} = req.headers.cookis;
    if(!token) return res.status(404).json({message: 'autorization denied'})
        
        jwt.verify(token, 
            "secret123", (error, user) => {
                if(error) return res.status(401).json({message: 'invalid token'})
                console.log(user)
                
                req.user = user 

                next()
            })
}