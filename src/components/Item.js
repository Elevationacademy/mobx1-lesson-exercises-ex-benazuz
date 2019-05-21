import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = () => {
        this.props.item.completed = !this.props.item.completed
      }
      editItem = () => {
        //your code here
      }
      deleteItem = () => {
        //your code here
      }
    render() {
      let item = this.props.item
        return (
            <div className={item.completed ? "completed" : "unCompleted"}>               
               {item.name}<input type="checkbox" value={item.name}/>
              
      {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */} 
            </div>)
    }
}
export default Item