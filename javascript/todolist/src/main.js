import {createProject,setProjects,openInputArea,canselEvent} from "./compenents/projects/createProject";
import Todo from './compenents/Tasks/todo'
import {createCenterBody,getDefaultTasks,createProjectButton} from "./compenents/XIIF"
import { getTasks } from "./compenents/Tasks/todos";
import { createHeader } from "./compenents/XIIF";
import Projects from "./compenents/projects/projects";



function mainPage(){
    const projects = new Projects()
  // const projectsItem = projects.getList
    document.body.appendChild(createHeader())
    document.body.appendChild(createCenterBody())
    getDefaultTasks(projects)//left side right side
    //set current project to project list
  //  setCurrentProjects()
    // create new project
    createProject()
   // getDefaultTasks()
   // set evet to project list //get Tasks from Projects
 //  getTasks()
   
   console.log("proects ]]]]]]]]]]",projects)

  
}
export default mainPage
/*
function getTasks(){
       const projectsList = document.getElementById("projects")
       projectsList.addEventListener("click",(e)=>{
            console.log("projects", e.target.id)
            const currentItem = JSON.parse(localStorage.getItem('projects'));
            const rightSideBar = document.getElementById("rightSide")
            const taskContentHeader = document.getElementById("taskContentHeaderId")
            // const centerBody = document.getElementById("centerBody")
            const rightContent = document.getElementById("rightContent")
            rightContent.remove()
            if(taskContentHeader !==null){
                taskContentHeader.remove()
            }
            //   taskContentHeader.innerHTML = ''
            const rightContentAgain = document.createElement("div")
            rightContentAgain.classList.add("rightContent")
            rightContentAgain.setAttribute("id","rightContent")
            const taskList = document.createElement("div")
            taskList.classList.add("taskList")
            //new tasks area
            const newTasks = document.createElement("div")
            newTasks.classList.add("newTasksCls")
            newTasks.setAttribute("id","newTasksId")
            //old tasks area
            const oldTasks = document.createElement("div")
            oldTasks.classList.add("newTaskCls")
            oldTasks.setAttribute("id","oldTasksId")
            if(currentItem !== null){
                //create project header
                currentItem.projects.forEach((todos) =>{
                    if(todos.title === e.target.id){
                            const header = document.createElement("HEADER")
                            header.innerHTML=todos.title
                            header.classList.add("taskContentHeaderCls")
                            header.setAttribute("id","taskContentHeaderId")
                            rightSideBar.appendChild(header)
                //   openInputArea(rightContentAgain)
                    }
                })
                currentItem.projects.forEach((todos) =>{
                    if(todos.title === e.target.id){
                        for (let index = 0; index < todos.todos.length; index++) {
                            const element = todos.todos[index];
                            const task = document.createElement("div")
                            task.classList.add("tasks")
                            task.setAttribute("id",element.title)
                            task.innerHTML +=
                                        `
                                            <div class="taskDetailCls">
                                            <input class='isOkButtons'  id="+"isOkButton"  type='radio'${element.isOk?'checked':"false"}>
                                            </div>
                                            <div class="taskDetailCls"><p>${element.title}</p></div>
                                            <div class="taskDetailCls"><p>${element.description}</p></div>
                                            <div class="taskDetailCls"><p>${element.dueDate}</p></div>
                                            <div class="taskDetailCls"><p>${element.priority}</p></div>
                                            <div class="taskDetailCls" id="dueDate"> <p>No Date</p></div>
                                            <div class="taskDetailCls"> <input type="date" ></input></div>
                                        `
                       if(!element.isOk){
                            newTasks.appendChild(task)
                        } else{
                          oldTasks.appendChild(task)
                       }
                        
                        taskList.appendChild(newTasks)
                        taskList.appendChild(oldTasks)
                        }
                    }
                })
               
            }
            const divCreateTask = document.createElement("div")
            divCreateTask.classList.add("createTaskCls")
            divCreateTask.appendChild(createProjectButton("+ Add Task","createTaskButton"))
            rightContentAgain.appendChild(divCreateTask)// create task button 
            rightContentAgain.appendChild(taskList)
            rightSideBar.appendChild(rightContentAgain) 
        //add task area
            const openTaskInput = document.getElementById("createTaskButton")
            openTaskInput.addEventListener("click",(e)=>{
                console.log("task button",e)
                openInputArea(divCreateTask,"newTaskInputArea","newTaskAddBtn","newTaskCanselBtn","newTaskInputTitle","newTaskInput",
                "inputBtnGroupsTask","newTaskCanselBtnCls","newTaskAddBtnCls",openTaskInput)
                canselEvent("newTaskCanselBtn","newTaskInputArea","newTaskCanselBtnCls",openTaskInput)
                addTask(currentItem,newTasks,taskList)
            })
   })

}

function addTask(currentItem,newTasks,taskList){
    console.log("ad Task current item", currentItem)
    const todoTitle = document.getElementById("taskContentHeaderId")
        const add = document.getElementById("newTaskAddBtn")
        add.addEventListener("click",(e)=>{
            e.preventDefault()
            if(!e.target.classList.contains("newTaskAddBtnCls")){
                return;
             }
            const inputTask= document.getElementById("newTaskInputTitle")
            const todo = new Todo()
            todo.setList=inputTask.value 
            currentItem.projects.forEach((todos) => {
                if(todos.title === todoTitle.innerText){
                    todos.todos.push(todo)
                    console.log("todos ",todos)
                }
                
            })
            inputTask.value="" 
            const task = document.createElement("div")
            task.classList.add("tasks")
            task.setAttribute("id",todo.title)
            task.innerHTML +=
                `
                    <div class="taskDetailCls">
                        <input class='isOkButtons'  id="+"isOkButton"  type='radio'${todo.isOk?'checked':"false"}>
                        </div>
                        <div class="taskDetailCls"><p>${todo.title}</p></div>
                        <div class="taskDetailCls"><p>${todo.description}</p></div>
                        <div class="taskDetailCls"><p>${todo.dueDate}</p></div>
                        <div class="taskDetailCls"><p>${todo.priority}</p></div>
                        <div class="taskDetailCls"> <p>No Date</p></div>
                        <div class="taskDetailCls"> <input type="date" ></input></div>
                    `
            newTasks.appendChild(task)
          //  if(taskList !==null){
                taskList.appendChild(newTasks)
         //   }
            localStorage.setItem('projects', JSON.stringify(currentItem));//add task to local storage
        })
}
*/
/*function setCurrentProjects(){
    const currentItem = JSON.parse(localStorage.getItem('projects'));
    if(currentItem !== null){
        currentItem.projects.forEach((todos) =>{
            setProjects(todos.title)
        }) 
    }
}

function createHeader(){
    const div = document.createElement("HEADER")
    const image = document.createElement("IMG")
    image.setAttribute("src", "images/todoListIcon.png");
    image.setAttribute("width", "204");
    image.setAttribute("height", "128");
    image.setAttribute("alt", "Image not found");
    div.appendChild(image)
    div.classList.add("header")
   return div
}
function createProjectButton(text,id){
    const createProjectButton = document.createElement("BUTTON")
    createProjectButton.innerHTML=text 
    createProjectButton.setAttribute("id",`${id}`)
    return createProjectButton
}

function timeLine(){
    const timeLine = document.createElement("div")
    timeLine.classList.add("timeLine")
    timeLine.setAttribute("id","timeLine")
    //next month
    const nextMonth = document.createElement("div")
    nextMonth.classList.add("nextMonth")
    nextMonth.setAttribute("id","nextMonth")
    nextMonth.innerHTML="Next Month" 
//add icon 
    // next 7 day
    const nextSevenDay = document.createElement("div")
    nextSevenDay.classList.add("nextSevenDays")
    nextSevenDay.setAttribute("id","nextSevenDays")
    nextSevenDay.innerHTML="Next 7 Days" 
//add icon 
    //today
    const today = document.createElement("div")
    today.setAttribute("id","today")
    today.classList.add("today")
    today.innerHTML="Today"
//add icon 

    //appendChild
    timeLine.appendChild(nextMonth)
    timeLine.appendChild(nextSevenDay)
    timeLine.appendChild(today)
    return timeLine
}

//projects
function projects(){
    const projects = document.createElement("div")
    const p = document.createElement("p")
    p.setAttribute("id","projectsP")
    projects.classList.add("projects")
    projects.setAttribute("id","projects")
    p.innerHTML="PROJECTS"
    projects.appendChild(p)
    return projects
}

function createLeftSideBar(){
    const leftSideDiv = document.createElement("div")
    leftSideDiv.setAttribute("id","leftSide")
    leftSideDiv.classList.add("leftSideBar")
    //content
    leftSideDiv.appendChild(getDefaultTasks().timeLine())
    leftSideDiv.appendChild(createProjectButton(`+ New Project`,"createProjectButton"))
    leftSideDiv.appendChild(projects())
    return leftSideDiv
}
function createCenterBody(){
    const centerBody = document.createElement("div")
    const leftBar =  getDefaultTasks().createLeftSideBar()
    const rightBar = createRightSideBar()
    centerBody.setAttribute("id","centerBody")
    centerBody.appendChild(leftBar)
    centerBody.appendChild(rightBar)
    return centerBody
}


*/
