import { format, compareAsc } from 'date-fns'
import Projects from "./projects"
import Todos from '../Tasks/todos'
/*
function createProject(){
    const createProjectButon = document.getElementById("createProjectButton")
    console.log("here is create project funtion")
    //input lissener area
    createProjectButon.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log("here is new project",e.target)
        const projects = document.getElementById("projects")
        openInputArea(projects,"newProjectInputArea","newProjectAddBtn","newProjectCanselBtn","newProjectInputTitle","newProjectInput",
        "inputBtnGroupsProject","newProjectCanselBtnCls","newProjectAddBtnCls",createProjectButon)
        //cansel event area
        canselEvent("newProjectCanselBtn","newProjectInputArea","newProjectCanselBtnCls",createProjectButon)
        // add event are
        addProject()
    })
}

function addProject(){
    const add = document.getElementById("newProjectAddBtn")
    add.addEventListener("click",(e)=>{
        e.preventDefault()
        if(!e.target.classList.contains("newProjectAddBtnCls")){
            return;
         }
        const inputProject= document.getElementById("newProjectInputTitle")
      //  const project =new Projects(inputProject.value)
        const project =new Projects()
        const todos = new Todos(inputProject)
        todos.setList=inputProject.value 
        projects.setList=todos
        //add projects to PROJEST DIV
        setProjects(inputProject.value)
        // add input project to local storage 
        project.setProjectsToLocal(todos)
        inputProject.value=""           
    })
}
function setProjects(input){
    const projects = document.getElementById("projects")
    const divProjectsList = document.createElement("div")
    divProjectsList.innerHTML= input
    divProjectsList.classList.add("projectList")
    divProjectsList.setAttribute("id",input)
    projects.appendChild(divProjectsList)
}

  const currentDate =  format(new Date(), 'MM-dd-yyyy')
   console.log("current Date",currentDate)
  // const todo = new Todo(currentDate)
     //  let newArray =JSON.parse(inputProject)
       // newArray.push(todo)

    //  project.setList=project
        

const btnAddTask =document.createElement("BUTTON")
            btnAddTask.setAttribute("id","newTaskAddBtn")
            btnAddTask.classList.add("newTaskAddBtn")
            btnAddTask.innerHTML="+ Add Task"

function canselEvent(newProjectCanselBtn,newProjectInputArea,newProjectCanselBtnCls,createProjectButon){
    const cansel = document.getElementById(newProjectCanselBtn)
    const inputArea = document.getElementById(newProjectInputArea)
    cansel.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log("here is cansel button",e)
        if(!e.target.classList.contains(newProjectCanselBtnCls)){
            return;
        }
        inputArea.remove()
        createProjectButon.style.display="block"
    })
    
}

function openInputArea(projects,projectInput,newProjectAddBtn,newProjectCanselBtn,newProjectInputTitle,newProjectInput,
    inputBtnGroupsProject,newProjectCanselBtnCls,newProjectAddBtnCls,createProjectButon){
    /// input Area
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
    projects.insertBefore(div,projects.firstChild);
    createProjectButon.style.display="none"

}

export { createProject,setProjects,openInputArea,canselEvent};
*/
