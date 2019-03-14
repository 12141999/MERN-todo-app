import React , { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onsubmit = this.onsubmit.bind(this);

        this.state = {
            todoDescription : '' ,
            todoResponsible : '',
            todoPriority : '',
            todoCompleted : false
        }

    }

    onChangeTodoDescription(event){
        this.setState({todoDescription : event.target.value });
    }
    
    onChangeTodoResponsible(event){
        this.setState({todoResponsible : event.target.value });
    }
    
    onChangeTodoPriority(event){
        this.setState({todoPriority : event.target.value });
    }
    
    onChangeTodoCompleted(event){
        this.setState({todoCompleted : event.target.value });
    }

    onsubmit(event) {
        event.preventDefault();

        const updatedTodo = {
            todoDescription : this.state.todoDescription,
            todoResponsible : this.state.todoResponsible,
            todoPriority : this.state.todoPriority,
            todoCompleted : this.state.todoCompleted
        }

        axios.post("http://localhost:4000/update/"+this.props.match.params.id , updatedTodo).then((res) => {
            console.log(res.data);
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });

    }

    render () {
        return (
            <div style={{marginTop : 20}}>
                <h3>Update Todo</h3>
                <form onSubmit={this.onsubmit}>
                    <div className="form-group">
                        <label>Description : </label>
                        <input type="text" className="form-control" value={this.state.todoDescription} onChange={this.onChangeTodoDescription}  />
                    </div>
                    <div className="form-group">
                        <label>Responsible : </label>
                        <input type="text" className="form-control" value={this.state.todoResponsible} onChange={this.onChangeTodoResponsible}  />                    
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="priorityRadioOptions" id="prioritylow" value='Low' checked={this.state.todoPriority==='Low'} onChange={this.onChangeTodoPriority} />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="priorityRadioOptions" id="prioritylow" value='High' checked={this.state.todoPriority==='High'} onChange={this.onChangeTodoPriority} />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update-Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default EditTodo ; 