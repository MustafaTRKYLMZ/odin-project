import { createProjectButton } from "../XIIF";
import { openInputArea } from "../projects/createProject";
import { canselEvent } from "../projects/createProject";
import Todo from "./todo";
import {IFs} from "../IFs"
import Projects from "../projects/projects";

export default class Todos {
    todos=[];
    title;
     constructor(title){
        this.title=title
     }
     set setList(title){
        //let books= JSON.parse(localStorage.getItem("library"))
       // if(books === null){
       //     books =[]
            
      //  }
      this.title=title
      //  this.reloadSinglePage(books,book,books.length)
     //   var modal = document.getElementById("myModal");
     //   modal.style.display = "none";
    }
    get getList() { 
        let newArray = JSON.parse(localStorage.getItem("library"))
        if(newArray === null){
            newArray =[]
            return
        }
        this.reloadPage(newArray)
    }

    static getTasks(projectsList){
        console.log("here is the getTaskButton")
      //  const projectsList = document.getElementById("projects")
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
            divCreateTask.appendChild(Todos.createTaskButton("+ Add Task","createTaskButton"))
            rightContentAgain.appendChild(divCreateTask)// create task button 
            rightContentAgain.appendChild(taskList)
            rightSideBar.appendChild(rightContentAgain) 
        //add task area
            const openTaskInput = document.getElementById("createTaskButton")
            openTaskInput.addEventListener("click",(e)=>{
                console.log("task button",e)
               
                Todos.openInputTaskArea(divCreateTask,"newTaskInputArea","newTaskAddBtn","newTaskCanselBtn","newTaskInputTitle","newTaskInput",
                "inputBtnGroupsTask","newTaskCanselBtnCls","newTaskAddBtnCls",openTaskInput)
                IFs.canselEvent("newTaskCanselBtn","newTaskInputArea","newTaskCanselBtnCls",openTaskInput)
                Todos.addTask(currentItem,newTasks,taskList)
            })
    })

    }
//create new Task 
static createTask(createTaskButon){//
    //  const createProjectButon = document.getElementById("createProjectButton")
      console.log("here is create Task funtion")
      //input lissener area
      if(createTaskButon !==null){
          createTaskButon.addEventListener("click",(e)=>{
          e.preventDefault()
          console.log("here is new project",e)
          const tasks = document.getElementById("createTaskCls")
          console.log("//////////////",tasks)
          Todos.openInputTaskArea(tasks,"newProjectInputArea","newProjectAddBtn","newProjectCanselBtn","newProjectInputTitle","newProjectInput",
          "inputBtnGroupsProject","newProjectCanselBtnCls","newProjectAddBtnCls",createTaskButon)
          //cansel event area
          IFs.canselEvent("newProjectCanselBtn","newProjectInputArea","newProjectCanselBtnCls",createTaskButon)
          // add event are
          Projects.addProject(tasks)
      })
      }
      
  }

    static createTaskButton(text,id){
        const createProjectButton = document.createElement("BUTTON")
        createProjectButton.innerHTML=text 
        createProjectButton.setAttribute("id",`${id}`)
        Todos.createTask(createProjectButton)
       console.log("hello from create project button")
        return createProjectButton
    }
    static openInputTaskArea(projects,projectInput,newProjectAddBtn,newProjectCanselBtn,newProjectInputTitle,newProjectInput,
        inputBtnGroupsProject,newProjectCanselBtnCls,newProjectAddBtnCls,createProjectButon){
        console.log("sssssss",projects)
        const div =document.createElement("div")
        div.classList.add("newProjectAdd")
        div.setAttribute("id",projectInput)
        //btn groups
        const divBtn =document.createElement("div")
        divBtn.classList.add("inputBtnGroups")
        divBtn.setAttribute("id",inputBtnGroupsProject)
        //input area
        const divInput =document.createElement("div")
        const input =document.createElement("input")
        input.setAttribute("id",newProjectInputTitle)
        divInput.setAttribute("id",newProjectInput)
        divInput.appendChild(input)
        //add button
        const btnAdd =document.createElement("BUTTON")
        btnAdd.setAttribute("id",newProjectAddBtn)//it must be uniqie
        btnAdd.classList.add(newProjectAddBtnCls)
        btnAdd.innerHTML="Add"
        //cansel button
        const btnCansel =document.createElement("BUTTON")
        btnCansel.setAttribute("id",newProjectCanselBtn)
        btnCansel.classList.add(newProjectCanselBtnCls)
        btnCansel.innerHTML="Cansel"
        div.appendChild(divInput)
        divBtn.appendChild(btnAdd)
        divBtn.appendChild(btnCansel)
        //append elements
       div.appendChild(divBtn)
       projects.appendChild(div);

        createProjectButon.style.display="none"
    }

    static addTask(currentItem,newTasks,taskList){
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
} Todos




//export {getTasks}