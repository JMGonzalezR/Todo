/**
 * @author Juan González <juanml93@gmail.com>  on 4/1/2016.
 */

'use strict';

import React from 'react';
require('../css/main.css');

class TodoItem extends React.Component{

    constructor(props){
        super(props);

    };

    componentDidMount () {
        this.setState({
            finished:this.props.finished
        });
    };
    changeTodoStatus(){
        this.setState({
            finished:!this.status.finished
        });
    };
    onDelete(){
        this.props.onDestroy(this.props.id);
    };



    render(){
        return(
            <div className="item-view">
                <button onClick={this.onDelete.bind(this)}>delete</button>
                <input type="checkbox" onClick={this.changeTodoStatus.bind(this)}>done</input>
                <li>{this.props.todoDescription}</li>
            </div>
        )
    }
}

TodoItem.defaultProps = {
    onDestroy: function(){},
    finished:false
};

export default TodoItem;