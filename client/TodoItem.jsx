/**
 * @author Juan González <juanml93@gmail.com>  on 4/1/2016.
 */

'use strict';

import React from 'react';
require('../css/main.css');

class TodoItem extends React.Component{

    constructor(props){
        super(props);
        this.state={
            finished:false
        }

    };

    componentDidMount () {
        this.setState({
            finished:this.props.finished
        });
    };
    changeTodoStatus(){
        this.setState({
            finished:!this.state.finished
        });
    };
    onDelete(){
        this.props.onDestroy(this.props.id);
    };



    render(){
        let style = {};
        if(this.state.finished){
            style={
                color: "#d9d9d9", textDecoration: "line-through"
            }
        }

        return(
            <div className="item-view">
                <button onClick={this.onDelete.bind(this)}>delete</button>
                <li style={style}>{this.props.todoDescription}</li>
                <div className="checkbox">
                    <input type="checkbox" onClick={this.changeTodoStatus.bind(this)}/><label>Done</label>
                </div>
            </div>
        )
    }
}

TodoItem.defaultProps = {
    onDestroy: function(){},
    finished:false
};

export default TodoItem;