const express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 4000;

const Todo = require('./todosSchema');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todos" , (err , db) => {
    if(err)
    {
        console.log("unable to connect database");
    }
    else{
        console.log("database has been connected");
    }
});

app.use(cors());
app.use(bodyParser.json());

app.get('/todos' , (req,res) => {
    Todo.find({} , (err , todos) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.json(todos);
        }
    });
});

app.get('/todos/:id' , (req,res) => {
    Todo.findById(req.params.id , (err , todo) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.json(todo);
        }
    });
});

app.post('/add' , (req, res) => {
    //console.log("server" , req.body);
    let todo = new Todo(req.body);  
    todo.save().then((todo) => {
        res.status(200).json({'todo': 'todos add succesfully'});
    }).catch((err) => {
        res.status(400).json('unable to add todo');
    });
});

app.post('/update/:id' , (req,res) => {
    Todo.findById(req.params.id , (err , todo) => {
        if(err)
        {
            console.log(err);
        }
        else{
            todo.todoDescription = req.body.todoDescription;
            todo.todoResponsible = req.body.todoResponsible;
            todo.todoPriority = req.body.todoPriority;
            todo.todoCompleted = req.body.todoCompleted;

            todo.save().then( (todo) => {
                res.json('todo updated');
            }).catch((err) => {
                res.status(400).send('updated is not possible');
            });
        }
    });
});



app.listen(port , (req,res) => {
    console.log('server is started');
});