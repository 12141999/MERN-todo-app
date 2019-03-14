import React , { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "../container/Todo";
import axios from "axios";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = { todos : [] };
    }

    componentDidMount(){
        axios.get("http://localhost:4000/todos").then((res) => {
            this.setState({ todos : res.data });
        }).catch((err) => {
            console.log(err);
        });
    }

    todolist() {
        return this.state.todos.map((todo , i) => {
            return <Todo todo={todo} key={i} />
        });
    }

    render () {
        return (
            <div>
                <h3>Todo-list</h3>
                <table className="table table-striped" style={{marginTop : 20}}>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Responsible</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todolist()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;