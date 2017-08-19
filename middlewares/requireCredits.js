/**
 * Created by Developer39 on 8/15/2017.
 */

module.exports=(req,res,next)=>{
    if(!req.user.credits<1)
    {
        return res.status(403).send({error:'Not enough credits!'});
    }

    next();
};