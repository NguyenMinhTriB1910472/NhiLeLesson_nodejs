const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.set('view engine', 'pug');
app.set('views', './views/users')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
var users= [
    {id:1,name:'Thinh'},
    {id:2,name:'HƯNG'},
];

app.get("/",function(request,response){
    response.render('index',{
        name: 'AAA'
    });
});
app.get("/users",function(request,response){
    response.render('index',{
        users: users
    });
});

app.get('/users/create',function(req,res){
    res.render('create')
});

app.post('/users/create',function(req,res){
    users.push(req.body);
    res.redirect('/users');
});

app.get('/users/search',function(req,res){
    var q=req.query.q;
    var matchedUsers=users.filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLocaleLowerCase()) !==-1;
    });
    res.render('index',{
        users : matchedUsers
    });
});

app.listen(port,function(){
    console.log(port);
});