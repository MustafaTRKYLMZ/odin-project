
import React from "react";

const FormItem =(props) =>{
 
    return (
       // <form onSubmit={this.onSubmitTask}>
            <input
            onChange={this.handleChange}
            value={props.task.text}
            type="text"
            id={this.props.task.id}
            />
       // </form>
    )
}

export default FormItem;