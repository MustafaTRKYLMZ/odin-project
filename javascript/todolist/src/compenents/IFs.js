import Projects from './projects/projects';
import Actions from './Actions';
class IFs {
  static createHeader() {
    const div = document.createElement('HEADER');
    const image = document.createElement('IMG');
    image.setAttribute('src', 'images/todoListIcon.png');
    image.setAttribute('width', '204');
    image.setAttribute('height', '128');
    image.setAttribute('alt', 'Image not found');
    div.innerText = 'Todolist';
    div.appendChild(image);

    div.classList.add('header');
    return div;
  }
  static createLeftSideBar() {
    const leftSideDiv = document.createElement('div');
    leftSideDiv.setAttribute('id', 'leftSide');
    leftSideDiv.classList.add('leftSideBar');
    //content
    leftSideDiv.appendChild(IFs.timeLine()); //time line style finished
    leftSideDiv.appendChild(
      IFs.createProjectButton(`+ New Project`, 'createProjectButton')
    );
    leftSideDiv.appendChild(IFs.projects());
    return leftSideDiv;
  }
  static projects() {
    //set current projects sytyle to left side
    const projects = document.createElement('div');
    const p = document.createElement('p');
    p.setAttribute('id', 'projectsP');
    projects.classList.add('projects');
    projects.setAttribute('id', 'projects');
    p.innerHTML = 'PROJECTS';
    projects.appendChild(p);
    return projects;
  }
  static createProjectButton(text, id) {
    const createProjectButton = document.createElement('BUTTON');
    createProjectButton.innerHTML = text;
    createProjectButton.setAttribute('id', `${id}`);
    return createProjectButton;
  }

  static createCenterBody() {
    const projectsItem = new Projects();
    console.log('Hello Dear Center');
    const centerBody = document.createElement('div');
    centerBody.setAttribute('id', 'centerBody');
    const leftBar = IFs.createLeftSideBar();
    const rightBar = IFs.createRightSideBar();
    centerBody.appendChild(leftBar);
    centerBody.appendChild(rightBar);
    document.body.appendChild(centerBody);
    Actions.getTimeLineTasks();
    const projects = document.getElementById('projects');
    Projects.createProject();

    projectsItem.setCurrentProjects(projectsItem, projects);
  }
  static createRightHeaderTime(rightSideBar, day) {
    const header = document.createElement('HEADER');
    header.innerHTML = day;
    header.classList.add('taskContentHeaderCls');
    header.setAttribute('id', 'taskContentHeaderId');
    rightSideBar.appendChild(header); //create
  }
  static createRigtSideContentArea(rightSideBar) {
    const rightContentAgain = document.createElement('div');
    rightContentAgain.classList.add('rightContent');
    rightContentAgain.setAttribute('id', 'rightContent');
    rightSideBar.appendChild(rightContentAgain); //rightSideBar,
    const taskList = document.createElement('div');
    taskList.classList.add('taskList');
    taskList.setAttribute('id', 'tasklistId');
    //new tasks area
    const newTasks = document.createElement('div');
    newTasks.classList.add('newTasksCls');
    newTasks.setAttribute('id', 'newTasksId');
    taskList.appendChild(newTasks);
    //old tasks area
    const oldTasks = document.createElement('div');
    oldTasks.classList.add('newTaskCls');
    oldTasks.setAttribute('id', 'oldTasksId');
    taskList.appendChild(oldTasks);
    rightContentAgain.appendChild(taskList);
  }
  static clearRightSideBar() {
    const taskContentHeader = document.getElementById('taskContentHeaderId');
    const rightContent = document.getElementById('rightContent');
    if (rightContent !== null) {
      rightContent.remove();
    }
    if (taskContentHeader !== null) {
      taskContentHeader.remove();
    }
  }
  static createRightSideBar() {
    const rightSideBar = document.createElement('div');
    rightSideBar.setAttribute('id', 'rightSide');
    rightSideBar.classList.add('rightSideBar');
    const rightContent = document.createElement('div');
    rightContent.classList.add('rightContent');
    rightContent.setAttribute('id', 'rightContent');
    rightContent.innerHTML = 'Assignments';
    rightSideBar.appendChild(rightContent);
    return rightSideBar;
  }
  static openInputArea(
    projects,
    projectInput,
    newProjectAddBtn,
    newProjectCanselBtn,
    newProjectInputTitle,
    newProjectInput,
    inputBtnGroupsProject,
    newProjectCanselBtnCls,
    newProjectAddBtnCls,
    createProjectButon
  ) {
    /// input Area
    const div = document.createElement('div');
    div.classList.add('newProjectAdd');
    div.setAttribute('id', projectInput);
    //btn groups
    const divBtn = document.createElement('div');
    divBtn.classList.add('inputBtnGroups');
    divBtn.setAttribute('id', inputBtnGroupsProject);
    //input area
    const divInput = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('id', newProjectInputTitle);
    divInput.setAttribute('id', newProjectInput);
    divInput.appendChild(input);
    //add button
    const btnAdd = document.createElement('BUTTON');
    btnAdd.setAttribute('id', newProjectAddBtn); //it must be uniqie
    btnAdd.classList.add(newProjectAddBtnCls);
    btnAdd.innerHTML = 'Add';
    //cansel button
    const btnCansel = document.createElement('BUTTON');
    btnCansel.setAttribute('id', newProjectCanselBtn);
    btnCansel.classList.add(newProjectCanselBtnCls);
    btnCansel.innerHTML = 'Cansel';
    div.appendChild(divInput);
    divBtn.appendChild(btnAdd);
    divBtn.appendChild(btnCansel);
    //append elements
    div.appendChild(divBtn);
    projects.insertBefore(div, projects.firstChild);
    createProjectButon.style.display = 'none';
  }
  static canselEvent(
    newProjectCanselBtn,
    newProjectInputArea,
    newProjectCanselBtnCls,
    createProjectButon
  ) {
    const cansel = document.getElementById(newProjectCanselBtn);
    const inputArea = document.getElementById(newProjectInputArea);
    cansel.addEventListener('click', (e) => {
      e.preventDefault();
      if (!e.target.classList.contains(newProjectCanselBtnCls)) {
        return;
      }
      inputArea.remove();
      createProjectButon.style.display = 'block';
    });
  }
  static timeLine() {
    const timeLine = document.createElement('div');
    timeLine.classList.add('timeLine');
    timeLine.setAttribute('id', 'timeLine');
    //add icon
    // next 7 day
    const nextSevenDay = document.createElement('div');
    nextSevenDay.classList.add('nextSevenDays');
    nextSevenDay.setAttribute('id', 'nextSevenDays');
    nextSevenDay.innerHTML = 'Next 7 Days';
    //add icon
    //today
    const today = document.createElement('div');
    today.setAttribute('id', 'today');
    today.classList.add('today');
    today.innerHTML = 'Today';
    //add icon
    timeLine.appendChild(nextSevenDay);
    timeLine.appendChild(today);
    return timeLine;
  }
  static createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footerCls');
    footer.setAttribute('id', 'footerId');
    // footer.innerText="Copyright Ⓒ Mustafa"
    document.body.appendChild(footer);
    const copyrigh = document.createElement('div');
    copyrigh.classList.add('copyRighCls');
    copyrigh.setAttribute('id', 'copyRighClsId');
    copyrigh.innerText = 'Copyright Ⓒ 2021 Mustafa';
    footer.appendChild(copyrigh);
  }
  static loadPage() {
    document.body.appendChild(IFs.createHeader());
    IFs.createCenterBody();
    IFs.createFooter();
    //
  }
}
export { IFs };
