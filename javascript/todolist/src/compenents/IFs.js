//import { createHeader } from "./IIF"
import Projects from "./projects/projects";
import Todos from "./Tasks/todos";
class IFs {
   
    static createHeader(){
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
    static createLeftSideBar(){
        const projectsItem = new Projects()
       // const projectslist=projectsItem.getList
        const leftSideDiv = document.createElement("div")
        leftSideDiv.setAttribute("id","leftSide")
        leftSideDiv.classList.add("leftSideBar")
        //content
        leftSideDiv.appendChild(IFs.timeLine())
        leftSideDiv.appendChild(IFs.createProjectButton(`+ New Project`,"createProjectButton"))
        
        leftSideDiv.appendChild(IFs.projects(projectsItem))
       // setCurrentProjects() 
      //createProjectButton
        return leftSideDiv
    }
    static createRightSideBar (){
        const rightSideBar = document.createElement("div")
        rightSideBar.setAttribute("id","rightSide")
        rightSideBar.classList.add("rightSideBar")
        const rightContent = document.createElement("div")
        rightContent.classList.add("rightContent")
        rightContent.setAttribute("id","rightContent")
        rightContent.innerHTML="Assignments"
        rightSideBar.appendChild(rightContent)
      //  Todos.getTasks()
        return rightSideBar
    }
    
    static openInputArea(projects,projectInput,newProjectAddBtn,newProjectCanselBtn,newProjectInputTitle,newProjectInput,
        inputBtnGroupsProject,newProjectCanselBtnCls,newProjectAddBtnCls,createProjectButon){
        /// input Area
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
        projects.insertBefore(div,projects.firstChild);
        createProjectButon.style.display="none"
    }
    static canselEvent(newProjectCanselBtn,newProjectInputArea,newProjectCanselBtnCls,createProjectButon){
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
    static createCenterBody(){
        console.log("Hello Dear Center")
        const centerBody = document.createElement("div")
        const leftBar =  IFs.createLeftSideBar()
        const rightBar = IFs.createRightSideBar()
        centerBody.setAttribute("id","centerBody")
        centerBody.appendChild(leftBar)
        centerBody.appendChild(rightBar)
        
        return centerBody
    }
    
    static timeLine(){
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
    
static createProjectButton(text,id){
    const createProjectButton = document.createElement("BUTTON")
    createProjectButton.innerHTML=text 
    createProjectButton.setAttribute("id",`${id}`)
    Projects.createProject(createProjectButton)
   console.log("hello from create project button")
    return createProjectButton
}

static projects(projectslist){//set current projects sytyle to left side 
    const projects = document.createElement("div")
    const p = document.createElement("p")
    p.setAttribute("id","projectsP")
    projects.classList.add("projects")
    projects.setAttribute("id","projects")
    p.innerHTML="PROJECTS"
    projects.appendChild(p)
    projectslist.setCurrentProjects(projectslist,projects)
  //  Projects.setCurrentProjects(projectslist)
   console.log("Projects",projectslist)
  
    return projects
}

   static loadPage(){
        document.body.appendChild(IFs.createHeader())
        document.body.appendChild(IFs.createCenterBody())
        console.log("=================",IFs)
    }
}
export {IFs}