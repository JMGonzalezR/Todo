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

    onDelete(){
        this.props.onDestroy(this.props.id);
    }

    render(){
        return(
            <div className="item-view">
                <button onClick={this.onDelete.bind(this)}>delete</button>
                <li>{this.props.todoDescription}</li>
            </div>
        )
    }
}

TodoItem.defaultProps = {
    onDestroy: function(){}
};

export default TodoItem;