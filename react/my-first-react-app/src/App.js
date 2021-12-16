// App.js

import React, { Component } from "react";
import uniqid from "uniqid";
import FormItem from "./components/FormItem";
import Overview from "./components/Overview";
class App extends Component {
  constructor(){
    super();
    this.state={
      task:{text:'', id:uniqid(),edit:false},
      tasks:[],
     
    };
  }
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
        edit:false
      }
    });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' ,id: uniqid(),edit:false},
      
    });
  };
  removeTask=(task)=>{
    console.log(" remove task")
      this.setState({
        tasks:this.state.tasks.filter((el) =>el.id !==task.id)
      })
  }
  editTask=(task)=>{
    console.log(" ...", " ...>>",task.id)
    this.state.tasks.forEach(el => {
      console.log("edit task",el)

      if(el.id ===task.id){
        this.setState({
          tasks:this.state.tasks.filter((el) => el.id !==task.id),
          task : {
            text: task.text,
            id: task.id,
            edit:true
          }
        });
        console.log(" new array ",this.state.tasks)
      }
    })

  }
  render() {
    const {task,tasks} =this.state
    return <div>
      <form onSubmit={this.onSubmitTask}>
        <label htmlFor="taskInput">Enter Task</label>
        <input
          onChange={this.handleChange}
          value={task.text}
          type="text"
          id="taskInput"
        />
          <button type="submit">
            Add Task
          </button>
      </form>
      <Overview tasks={tasks} removeTask={this.removeTask} editTask={this.editTask}/>
      </div>;
  }
}

export default App;