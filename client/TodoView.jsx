/**
 * @author Juan González <juanml93@gmail.com>  on 3/31/2016.
 */

'use strict';
import React from 'react';
import TodoItem from './TodoItem.jsx';

class TodoView extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            newTodo:'',
            todoList: props.todoList
        };
    }
    handleChange(event){
        this.setState({newTodo: event.target.value});
    };

    deleteTodo(index){
        delete this.props.todoList[index];
        this.setState({
            newTodo:this.state.newTodo,
            todoList:this.props.todoList
        })
    };



    onEnterKey(event){

        if(event.keyCode !=13) {
            return;
        }
        event.preventDefault();
        let val = this.state.newTodo.trim();

        if(val){
            this.props.todoList.push(<TodoItem todoDescription={val} onDestroy={this.deleteTodo.bind(this)}  id={this.props.todoList.length} key={this.props.todoList.length}/>);
            this.setState({newTodo:''});
        }

    };

    render() {
        return(<div className="container">
            <div className="row">
                <h1>Todo Example</h1>
                <div className="col-sm-12">
                    <input
                        className="new-todo form-control"
                        onKeyDown={this.onEnterKey.bind(this)}
                        value={this.state.newTodo}
                        onChange={this.handleChange.bind(this)}
                        placeholder="What you have to do?"
                        autoFocus={true}
                    />
                    <div className="todo-list">
                        {this.state.todoList}
                    </div>
                </div>

            </div>

        </div>)
    };
}

TodoView.defaultProps = {
    todoList: []
};

export default TodoView;