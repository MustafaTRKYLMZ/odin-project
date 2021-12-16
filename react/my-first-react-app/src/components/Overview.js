// Overview.js

import React from "react";

import FormItem from "./FormItem";

const Overview = (props) => {
  const { tasks,removeTask,editTask } = props;

  return (
    <ul margin={'10px'}>
      {tasks.map((task) => {
        return <li key={task.id}>
            {task.text} {'    '}
            {task.edit?<FormItem props ={this.props}/>:<button margin={'10px'} color="blue" onClick={() =>editTask(task)}>Edit Task</button>}
            {'              '}
            <button margin={'10px'} color="red" onClick={() =>removeTask(task)}>Remove Item</button>
        </li>;
      })}
    </ul>
  );
};

export default Overview;