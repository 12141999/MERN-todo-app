const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
    todoDescription : {
        type : String
    },
    todoResponsible : {
        type : String
    },
    todoPriority : {
        type : String  
    },
    todoCompleted : {
        type : Boolean
    }
});

module.exports = mongoose.model('Todo' , todoSchema);