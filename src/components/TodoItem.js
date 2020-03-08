import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/incomplete.svg';
import checkCompletedImg from '../img/completed.svg';
class TodoItem extends Component {
    render() {
        const {item, onClick, onKeyUp} = this.props;
        let url = checkImg;
        if(item.isComplete){
            url = checkCompletedImg;
        }
        return (
        <div className={classNames("TodoItem",{
            'TodoItemComplete':  item.isComplete
        })} onClick = {onClick} onKeyUp = {onKeyUp} >
            <img src={url} width={32} height={32} />
            <p>{item.title}</p>
        </div>
        );
    }
}
export default TodoItem;