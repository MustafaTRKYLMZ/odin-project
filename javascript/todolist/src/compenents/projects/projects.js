import Todos from "../Tasks/todos";
import {IFs} from "../IFs"
export default class Projects {
    projects=[];
     constructor(){
         this.projects
     }
     set setList(todos){
     
      this.projects.push(todos)
    }
    get getList() { 
        let projectsItem = JSON.parse(localStorage.getItem("projects"))
        if(projectsItem === null){
            const newArray =new Projects()
            return newArray
        }
        return projectsItem
       // this.reloadPage(projectsItem)
    }
    // set projects to local storage
    static setProjectsToLocal(project){
      const currentTtem = JSON.parse(localStorage.getItem('projects'));
     // const currentTtem =Projects.getList
       console.log("xxxxxx",project)
       
        if(currentTtem !== null){
            project.projects.forEach((item) =>{
                 currentTtem.projects.push(item)
            })
            localStorage.setItem('projects', JSON.stringify(currentTtem));
        } else {
           //const proje = new Projects(todos)
          // proje.setList=todos
            localStorage.setItem('projects', JSON.stringify(project));
        }
    }
    //create new project 
    static createProject(){//
        const createProjectButon = document.getElementById("createProjectButton")
        console.log("here is create project funtion")
        //input lissener area
        if(createProjectButon !==null){
            createProjectButon.addEventListener("click",(e)=>{
            e.preventDefault()
            console.log("here is new project",e)
            const projects = document.getElementById("projects")
            console.log("//////////////",projects)
            IFs.openInputArea(projects,"newProjectInputArea","newProjectAddBtn","newProjectCanselBtn","newProjectInputTitle","newProjectInput",
            "inputBtnGroupsProject","newProjectCanselBtnCls","newProjectAddBtnCls",createProjectButon)
            //cansel event area
            IFs.canselEvent("newProjectCanselBtn","newProjectInputArea","newProjectCanselBtnCls",createProjectButon)
            // add event are
            Projects.addProject(projects)
        })
        }
        
    }
    // 
      static addProject(projects){//
         console.log("Hello from add project button")
        const add = document.getElementById("newProjectAddBtn")
        add.addEventListener("click",(e)=>{
            e.preventDefault()
            if(!e.target.classList.contains("newProjectAddBtnCls")){
                return;
             }
            const inputProject= document.getElementById("newProjectInputTitle")
          //  const project =new Projects(inputProject.value)
            const project =new Projects()
            const todos = new Todos(inputProject.value)
            todos.setList=inputProject.value 
            project.setList=todos
            //add projects to PROJEST DIV
             console.log("new project",inputProject.value)
            Projects.setProjects(inputProject.value,projects)
           console.log("new Project",project)
            // add input project to local storage 
            Projects.setProjectsToLocal(project)
            inputProject.value=""           
        })
    }
     static setProjects(title,projectsStyle){  
         //set project to left side 
       // const projects = document.getElementById("projects")
        const divProjectsList = document.createElement("div")
        divProjectsList.innerHTML= title
        divProjectsList.classList.add("projectList")
        divProjectsList.setAttribute("id",title)
        projectsStyle.appendChild(divProjectsList)
      //  this.addProject()
      
       return projectsStyle
    }
     setCurrentProjects(projects,projectsStyle){
        // console.log("hello from Projects =====",projects)
        //const currentItem = JSON.parse(localStorage.getItem('projects'));
        const currentItem= projects.getList
         if(currentItem !== null){
             currentItem.projects.forEach((todos) =>{
                 Projects.setProjects(todos.title,projectsStyle)
             }) 
         }
         Todos.getTasks(currentItem,projectsStyle)
    }
    // oprn input area
    
     static openInputArea(projects,projectInput,newProjectAddBtn,newProjectCanselBtn,newProjectInputTitle,newProjectInput,
        inputBtnGroupsProject,newProjectCanselBtnCls,newProjectAddBtnCls,createProjectButon){
        /// input Area
        console.log("OPEN PROJECT INPUT AREA",projects)
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
    //delete project 
    deleteProject(){

    }
    // update project
    updateProject(){

    }

} Projects