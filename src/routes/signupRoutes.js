const express=require('express');
const signupRouter=express.Router();
function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            nav,
            title:"Library"
        })
    })
    signupRouter.get('/success',function(req,res){
        res.send("Hey i am added");
        })
    return signupRouter;
}
module.exports=router;
