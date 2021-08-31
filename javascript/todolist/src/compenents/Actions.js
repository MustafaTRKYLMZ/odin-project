import Todo from "./Tasks/todo"
import { format} from 'date-fns'



export default class Actions {

    static getActions(){
        console.log("Hello from actions")
        let projects = JSON.parse(localStorage.getItem("projects"))
       // Todo.updateTasks()
       const newTasksId = document.getElementById("newTasksId")
       newTasksId.addEventListener("click",(e)=>{
            Todo.deleteTask(e,projects)
         //   Todo.updateTasks(e,projects)
          
            if(e.path[1].className ==="taskDetailDateCls"){
                Todo.setDate(e,projects)
              
            } else if (e.path[1].className ==="taskDetailCls"){
                 console.log("new Div",e.path[1].className)
                Todo.setTitle(e,projects)
            }
            

        })
       
       

        
    }
} Actions