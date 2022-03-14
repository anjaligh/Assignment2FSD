const express=require("express");
// initialise express

const app=new express();
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'./authors',name:"Authors"
    },
    {
        link:'./admin',name:"Add Book"
    },
    {
        link:'./signup',name:"Sign-Up"
    },
    {
        link:'./login',name:"Login"
    }
]
const booksRouter= require('./src/routes/bookRoutes')(nav)
const adminRouter= require('./src/routes/adminRoutes')(nav)
const authorsRouter= require('./src/routes/authorsRoutes')(nav)
const signupRouter= require('./src/routes/signupRoutes')(nav)
const loginRouter= require('./src/routes/loginRoutes')(nav)
app.use(express.static('./public'))
app.set('view engine','ejs');
app.set('views','./src/views');//app.set('views',__dirname+'/src/views')
app.use('/books',booksRouter);
app.use('/admin',adminRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});
// app.get('/books',function(req,res){
//     res.render("index",
//     {
//         nav:[{link:'/books',name:'Books'},{link:'./authors',name:"Authors"}],
//         title:'Library'
//     });
// });

app.listen(5000);
// localhost:5000 or 127.0.0.1:5000