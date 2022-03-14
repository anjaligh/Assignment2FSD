const express=require("express");
const authorsRouter=express.Router();
function router(nav){
    var books=[
        {
            Title:'Harry Potter',
            Author:'J K Rowling',
            Genre:'Fantasy',
            image:"harry.png",
            imageAuthor:"rowling.jpg"
        },
        {
            Title:'Tom and Jerry',
            Author:'Joseph Barbera',
            Genre:'Cartoon',
            image:'tomAndJerry.png',
            imageAuthor:'barbera.jpg'
        },
        {
            Title:'Pathummayude Aadu',
            Author:'Vaikkam Muhammed Basheer',
            Genre:'Drama',
            image:'aadu.png',
            imageAuthor:'basheer.png'
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render('authors',
        {
            nav,
            title:'Library',
            books
        });
    });
    
    // booksRouter.get("/single",function(req,res){
    //     res.send("hi ");
    // })
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title:'Library',
            book:books[id]
        })
    })
    return authorsRouter;
}

module.exports=router;