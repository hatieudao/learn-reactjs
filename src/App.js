import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

import tick from './img/tick.svg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      todoItems: [
      {title:"Go Library", isComplete: true},
      {title:"Study", isComplete: false},
      {title:"Have Lunch", isComplete: false}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onItemClicked(item){
    return (event)=>{
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems:[
          ...todoItems.slice(0, index),
          {
            ...item, isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      })
    }
  }
  onKeyUp(event){
    if(event.keyCode === 13){
      let text = event.target.value;
      if(!text) return;
      text = text.trim();
      if(!text) return;
      this.setState({
        newItem: '',
        todoItems:[
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      });
    }
  }
  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }
  render(){
    const { newItem, todoItems } = this.state;
    return (
      <div className="App">
        <div className="header">
          <img src={tick} with={30} height={30} />
          <input type = "text" placeholder="Add an item" 
          value = {newItem}
          onChange = {this.onChange}
          onKeyUp = {this.onKeyUp} />
        </div>
        {
          todoItems.map( (item,index)=>
          <TodoItem 
          key={index} 
          item={item}
          onClick={this.onItemClicked(item)}
          
            />
          )
        }
    </div>
  )
}
}

export default App;
