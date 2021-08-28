import { setProjects } from "./projects/createProject"
import { getTasks } from "./Tasks/todos"
/*
function getDefaultTasks(projects){
    createLeftSideBar()
    setCurrentProjects(projects)
  //  getTasks()
}

function createLeftSideBar(){
    const leftSideDiv = document.createElement("div")
    leftSideDiv.setAttribute("id","leftSide")
    leftSideDiv.classList.add("leftSideBar")
    //content
    leftSideDiv.appendChild(timeLine())
    leftSideDiv.appendChild(createProjectButton(`+ New Project`,"createProjectButton"))
    leftSideDiv.appendChild(projects())
   // setCurrentProjects()
    return leftSideDiv
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
function createProjectButton(text,id){
    const createProjectButton = document.createElement("BUTTON")
    createProjectButton.innerHTML=text 
    createProjectButton.setAttribute("id",`${id}`)
    return createProjectButton
}
function projects(){//set current projects sytyle to left side 
    const projects = document.createElement("div")
    const p = document.createElement("p")
    p.setAttribute("id","projectsP")
    projects.classList.add("projects")
    projects.setAttribute("id","projects")
    p.innerHTML="PROJECTS"
    projects.appendChild(p)
    return projects
}/*

function createCenterBody(){
    const centerBody = document.createElement("div")
    const leftBar =  createLeftSideBar()
    const rightBar = createRightSideBar()
    centerBody.setAttribute("id","centerBody")
    centerBody.appendChild(leftBar)
    centerBody.appendChild(rightBar)
    return centerBody
}

function createRightSideBar (){
    const rightSideBar = document.createElement("div")
    rightSideBar.setAttribute("id","rightSide")
    rightSideBar.classList.add("rightSideBar")
    const rightContent = document.createElement("div")
    rightContent.classList.add("rightContent")
    rightContent.setAttribute("id","rightContent")
    rightContent.innerHTML="Assignments"
    rightSideBar.appendChild(rightContent)
    return rightSideBar
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

// get Default Projects from local storage
function setCurrentProjects(projects){
   // const currentItem = JSON.parse(localStorage.getItem('projects'));
   const currentItem= projects.getList
    if(currentItem !== null){
        currentItem.projects.forEach((todos) =>{
            setProjects(todos.title)
        }) 
    }
}
export { getDefaultTasks,createCenterBody};//createProjectButton,createHeader*/