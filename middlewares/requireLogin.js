/**
 * Created by Developer39 on 8/15/2017.
 */

module.exports=(req,res,next)=>{
    if(!req.user)
    {
            return res.status(401).send({error:'You Must LogIn First'});
    }

    next();
};