import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const todo = (props) => (
    <tr>
        <td>{props.todo._id}</td>
        <td>{props.todo.todoDescription}</td>
        <td>{props.todo.todoResponsible}</td>
        <td>{props.todo.todoPriority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default todo;