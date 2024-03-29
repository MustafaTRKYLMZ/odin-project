import Todos from '../Tasks/todos';
import { IFs } from '../IFs';
export default class Projects {
  projects = [];
  constructor() {
    this.projects;
  }
  set setList(todos) {
    this.projects.push(todos);
  }
  get getList() {
    let projectsItem = JSON.parse(localStorage.getItem('projects'));
    if (projectsItem === null) {
      const newArray = new Projects();
      return newArray;
    }
    return projectsItem;
    // this.reloadPage(projectsItem)
  }
  // set projects to local storage
  static setProjectsToLocal(project) {
    const currentTtem = JSON.parse(localStorage.getItem('projects'));
    if (currentTtem !== null) {
      project.projects.forEach((item) => {
        currentTtem.projects.push(item);
      });
      localStorage.setItem('projects', JSON.stringify(currentTtem));
    } else {
      localStorage.setItem('projects', JSON.stringify(project));
    }
  }
  //create new project
  static createProject() {
    const createProjectButon = document.getElementById('createProjectButton');
    //input lissener area
    if (createProjectButon !== null) {
      createProjectButon.addEventListener('click', (e) => {
        e.preventDefault();
        const projects = document.getElementById('projects');
        IFs.openInputArea(
          projects,
          'newProjectInputArea',
          'newProjectAddBtn',
          'newProjectCanselBtn',
          'newProjectInputTitle',
          'newProjectInput',
          'inputBtnGroupsProject',
          'newProjectCanselBtnCls',
          'newProjectAddBtnCls',
          createProjectButon
        );
        //cansel event area
        IFs.canselEvent(
          'newProjectCanselBtn',
          'newProjectInputArea',
          'newProjectCanselBtnCls',
          createProjectButon
        );
        // add event are
        Projects.addProject(projects);
      });
    }
  }
  //
  static addProject(projects) {
    //
    const add = document.getElementById('newProjectAddBtn');
    add.addEventListener('click', (e) => {
      e.preventDefault();
      if (!e.target.classList.contains('newProjectAddBtnCls')) {
        return;
      }
      const inputProject = document.getElementById('newProjectInputTitle');
      //  const project =new Projects(inputProject.value)
      const project = new Projects();
      const todos = new Todos(inputProject.value);
      todos.setList = inputProject.value;
      project.setList = todos;
      //add projects to PROJEST DIV
      Projects.setProjects(inputProject.value, projects);
      // add input project to local storage
      Projects.setProjectsToLocal(project);
      inputProject.value = '';
    });
  }
  static setProjects(title, projectsStyle) {
    //set project to left side
    const divProjectsList = document.createElement('div');
    divProjectsList.classList.add('projectList');
    divProjectsList.setAttribute('id', 'projectListId');
    const divP = document.createElement('div');
    const pProjectName = document.createElement('p');
    pProjectName.innerText = title;
    pProjectName.setAttribute('id', 'projectTitleId');
    divP.appendChild(pProjectName);
    divProjectsList.appendChild(divP);
    const divButton = document.createElement('div');
    const closeButton = document.createElement('BUTTON');
    closeButton.classList.add('closeProjectButtonCls');
    closeButton.setAttribute('id', 'closeProjectButtonId');
    closeButton.innerText = 'X';
    divButton.appendChild(closeButton);
    divProjectsList.appendChild(divButton);
    projectsStyle.appendChild(divProjectsList);
  }
  setCurrentProjects(projects, projectsStyle) {
    const currentItem = projects.getList;
    if (currentItem !== null) {
      currentItem.projects.forEach((todos) => {
        Projects.setProjects(todos.title, projectsStyle);
      });
    }
    projectsStyle.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.id === 'projectTitleId') {
        Todos.getTasks(projectsStyle);
      } else if (e.target.id === 'closeProjectButtonId') {
        Projects.deleteProject(e);
      }
    });
  }
  //delete project
  static deleteProject(e) {
    if (confirm('Are you sure to remove this item')) {
      const projectTitle = e.target.parentElement.previousSibling.innerText;
      e.target.parentElement.parentElement.remove();
      let projects = JSON.parse(localStorage.getItem('projects'));
      projects.projects.forEach((item, index) => {
        if (item.title === projectTitle) {
          if (index > -1) {
            projects.projects.splice(index, 1);
          }
        }
      });
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }
}
Projects;
