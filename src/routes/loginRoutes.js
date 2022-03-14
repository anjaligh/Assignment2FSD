const express=require('express');
const loginRouter=express.Router();
function router(nav){
    loginRouter.get('/',function(req,res){
        res.render('login',{
            nav,
            title:"Library"
        })
    })
    loginRouter.get('/success',function(req,res){
        res.send("logged in");
        })
    return loginRouter;
}
module.exports=router;
