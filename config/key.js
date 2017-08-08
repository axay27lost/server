//key.js
//what set of credentials to Return
if(process.env.NODE_ENV === 'production')
{
    module.exports= require('./prod');
}else
{
    module.exports= require('./dev');
}

