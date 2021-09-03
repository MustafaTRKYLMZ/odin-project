import Todo from './todo';
import { IFs } from '../IFs';
import Projects from '../projects/projects';
import Actions from '../Actions';

export default class Todos {
  todos = [];
  title;
  constructor(title) {
    this.title = title;
  }
  set setList(title) {
    this.title = title;
  }
  get getList() {
    let newArray = JSON.parse(localStorage.getItem('library'));
    if (newArray === null) {
      newArray = [];
      return;
    }
    this.reloadPage(newArray);
  }

  static createRightSideHeader(currentItem, rightSideBar, e) {
    currentItem.projects.forEach((todos) => {
      if (todos.title === e.target.innerText) {
        //create right side bar and get todos
        const header = document.createElement('HEADER');
        header.innerHTML = todos.title;
        header.classList.add('taskContentHeaderCls');
        header.setAttribute('id', 'taskContentHeaderId');
        rightSideBar.appendChild(header); //create
      }
    });
  }
  static setTasksToRightSide(
    currentItem,
    taskList,
    CurentNewTasks,
    CurentOldTasks,
    todoTitle
  ) {
    if (currentItem !== null) {
      currentItem.projects.forEach((todos) => {
        if (todos.title === todoTitle) {
          for (let index = 0; index < todos.todos.length; index++) {
            const element = todos.todos[index];
            const newTasks = document.createElement('div'); // currentItem, taskList,CurentNewTasks, CurentOldTasks,
            const oldTasks = document.createElement('div');
            newTasks.classList.add('newTasks');
            newTasks.setAttribute('id', todos.title);
            oldTasks.classList.add('oldTasks');
            oldTasks.setAttribute('id', todos.title);

            if (!element.isOk) {
              //it means tasks new, new tasks
              newTasks.innerHTML += `
                                                    <div class="taskDetailCls">
                                                    <input class='isOkButtons'  id="+"isOkButton"  type='radio'${
                                                      element.isOk
                                                        ? 'checked'
                                                        : 'false'
                                                    }>
                                                    </div>
                                                    <div class="taskDetailCls"><p>${
                                                      element.title
                                                    }</p></div>
                                                    <div class="taskDetailCls"><p>${
                                                      element.description
                                                    }</p></div>`;
              if (element.dueDate === null || element.dueDate === '') {
                newTasks.innerHTML += `
                                                        <div class="taskDetailDateCls" id="noDateId${element.title}"><p>No Date</p></div>
                                                        `;
              } else {
                newTasks.innerHTML += `
                                                        <div class="taskDetailDateCls" id="dueDate${element.title}"><p>${element.dueDate}</p></div>
                                                        `;
              }
              newTasks.innerHTML += `
                                                    <div class="taskCloseBtnCls"> <button  id="taskCloseBtnId">X</button></div>
                                                    `;
              //----------------

              CurentNewTasks.appendChild(newTasks);
              taskList.appendChild(CurentNewTasks);
            } else if (element.isOk) {
              //it means tasks finshed, old tasks
              oldTasks.innerHTML += `
              <div class="taskDetailCls">
              <input class='isOkButtons'  id="+"isOkButton"  type='radio'${
                element.isOk ? 'checked' : 'false'
              }>
              </div>
              <div class="taskDetailCls"><p>${element.title}</p></div>
              <div class="taskDetailCls"><p>${element.description}</p></div>`;
              if (element.dueDate === null || element.dueDate === '') {
                oldTasks.innerHTML += `
                  <div class="taskDetailDateCls" id="noDateId${element.title}"><p>No Date</p></div>
                  `;
              } else {
                oldTasks.innerHTML += `
                  <div class="taskDetailDateCls" id="dueDate${element.title}"><p>${element.dueDate}</p></div>
                  `;
              }
              oldTasks.innerHTML += `
              <div class="taskCloseBtnCls"> <button  id="taskCloseBtnId">X</button></div>
              `;
              CurentOldTasks.appendChild(oldTasks);
              taskList.appendChild(CurentOldTasks);
            }
          }
        }
      });
    }
  }
  static createTaskButtonArea(rightContentAgain) {
    //taskList  rightSideBar
    const divCreateTask = document.createElement('div');
    divCreateTask.classList.add('createTaskCls');
    divCreateTask.setAttribute('id', 'createTaskId');
    divCreateTask.appendChild(
      Todos.createTaskButton('+ Add Task', 'createTaskButton')
    );
    rightContentAgain.appendChild(divCreateTask); // create task button rightSideBar
  }
  static addTaskArea() {
    const openTaskInput = document.getElementById('createTaskButton');
    openTaskInput.addEventListener('click', (e) => {
      e.preventDefault();
      Todos.openInputTaskArea();
      IFs.canselEvent(
        'newTaskCanselBtn',
        'newTaskInputArea',
        'newTaskCanselBtnCls',
        openTaskInput
      );
      //-----------------------------------------------------
      Todos.addNewTask(); //currentItem,newTasks,taskList
    });
  }
  static creaModel() {
    const rightContentAgain = document.getElementById('rightContent');
    const div = document.createElement('div');
    div.setAttribute('id', 'myModal');
    div.classList.add('modal');

    const divContent = document.createElement('div');
    divContent.classList.add('modal-content');
    //span
    const span = document.createElement('SPAN');
    span.innerHTML += `<span class="close">&times;</span>`;
    //input date area
    const dateInput = document.createElement('INPUT');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'dateInput');
    // append sortly
    span.appendChild(dateInput);
    divContent.appendChild(span);
    div.appendChild(divContent);
    rightContentAgain.appendChild(div);
  }
  static createNewSideBar(currentItem, rightSideBar, e) {
    if (currentItem !== null) {
      Todos.createRightSideHeader(currentItem, rightSideBar, e);
    }
    // create Button Area
    const rightContentAgain = document.createElement('div');
    rightContentAgain.classList.add('rightContent');
    rightContentAgain.setAttribute('id', 'rightContent');
    rightSideBar.appendChild(rightContentAgain); //rightSideBar,
    Todos.createTaskButtonArea(rightContentAgain);
    //==============================================
    const taskList = document.createElement('div');
    taskList.classList.add('taskList');
    taskList.setAttribute('id', 'tasklistId');
    //new tasks area
    const newTasks = document.createElement('div');
    newTasks.classList.add('currentNewTasksCls');
    newTasks.setAttribute('id', 'newTasksId');
    taskList.appendChild(newTasks);
    //old tasks area
    const oldTasks = document.createElement('div');
    oldTasks.classList.add('currentOldTasksCls');
    oldTasks.setAttribute('id', 'oldTasksId');
    taskList.appendChild(oldTasks);
    rightContentAgain.appendChild(taskList);

    // rightSideBar.appendChild(rightContentAgain)
  }
  static setTimeTaskToRigtSide(todayArray, day) {
    // set todays tasks to right side bar================================================
    const rightSideBar = document.getElementById('rightSide');
    // right side header=================================
    IFs.createRightHeaderTime(rightSideBar, day);
    IFs.createRigtSideContentArea(rightSideBar);
    // set Tasks Data right side ============================
    const taskList = document.getElementById('tasklistId');
    const CurentNewTasks = document.getElementById('newTasksId');
    const CurentOldTasks = document.getElementById('oldTasksId');
    //  Todos.setTimeTaskToRigtSide(todayArray,taskList,newTasks,oldTasks)
    if (todayArray !== null) {
      for (let index = 0; index < todayArray.length; index++) {
        const element = todayArray[index];
        const newTasks = document.createElement('div'); // currentItem, taskList,CurentNewTasks, CurentOldTasks,
        const oldTasks = document.createElement('div');
        newTasks.classList.add('newTasks');
        newTasks.setAttribute('id', element.title);
        oldTasks.classList.add('oldTasks');
        oldTasks.setAttribute('id', element.title);

        if (!element.isOk) {
          //it means tasks new, new tasks
          newTasks.innerHTML += `
                                                    <div class="taskDetailCls">
                                                    <input class='isOkButtons'  id="+"isOkButton"  type='radio'${
                                                      element.isOk
                                                        ? 'checked'
                                                        : 'false'
                                                    }>
                                                    </div>
                                                    <div class="taskDetailCls"><p>${
                                                      element.title
                                                    }</p></div>
                                                    <div class="taskDetailCls"><p>${
                                                      element.description
                                                    }</p></div>`;
          if (element.dueDate === null || element.dueDate === '') {
            newTasks.innerHTML += `
                                                        <div class="taskDetailDateCls" id="noDateId${element.title}"><p>No Date</p></div>
                                                        `;
          } else {
            newTasks.innerHTML += `
                                                        <div class="taskDetailDateCls" id="dueDate${element.title}"><p>${element.dueDate}</p></div>
                                                        `;
          }
          newTasks.innerHTML += `
                                                    <div class="taskCloseBtnCls"> <button  id="taskCloseBtnId">X</button></div>
                                                    `;
          //----------------

          CurentNewTasks.appendChild(newTasks);
          taskList.appendChild(CurentNewTasks);
        } else if (element.isOk) {
          //it means tasks finshed, old tasks
          oldTasks.innerHTML += `
              <div class="taskDetailCls">
              <input class='isOkButtons'  id="+"isOkButton"  type='radio'${
                element.isOk ? 'checked' : 'false'
              }>
              </div>
              <div class="taskDetailCls"><p>${element.title}</p></div>
              <div class="taskDetailCls"><p>${element.description}</p></div>`;
          if (element.dueDate === null || element.dueDate === '') {
            oldTasks.innerHTML += `
                  <div class="taskDetailDateCls" id="noDateId${element.title}"><p>No Date</p></div>
                  `;
          } else {
            oldTasks.innerHTML += `
                  <div class="taskDetailDateCls" id="dueDate${element.title}"><p>${element.dueDate}</p></div>
                  `;
          }
          oldTasks.innerHTML += `
              <div class="taskCloseBtnCls"> <button  id="taskCloseBtnId">X</button></div>
              `;
          CurentOldTasks.appendChild(oldTasks);
          taskList.appendChild(CurentOldTasks);
        }
      }
    }
  }
  static getTasks(projectsStyle) {
    ///
    projectsStyle.addEventListener('click', (e) => {
      e.preventDefault();

      const currentTtems = JSON.parse(localStorage.getItem('projects'));
      const rightSideBar = document.getElementById('rightSide');
      //clear right side bar
      IFs.clearRightSideBar();
      //----------------------------------
      Todos.createNewSideBar(currentTtems, rightSideBar, e);
      const taskList = document.getElementById('tasklistId');
      const newTasks = document.getElementById('newTasksId');
      const oldTasks = document.getElementById('oldTasksId');
      // const {rightContentAgain} = Todos.createNewSideBar()
      //-----------------------------------------------------------------------
      const todoTitle = e.target.innerText;
      Todos.setTasksToRightSide(
        currentTtems,
        taskList,
        newTasks,
        oldTasks,
        todoTitle
      );
      //add task area--------------------------------------------------------------------------------
      Todos.addTaskArea();
      Actions.getActions();
    });
  }
  //create new Task
  static createTask(createTaskButon) {
    //
    //input lissener area
    if (createTaskButon !== null) {
      createTaskButon.addEventListener('click', (e) => {
        e.preventDefault();
        //
        const tasks = document.getElementById('createTaskId');
        Todos.openInputTaskArea();
        //cansel event area
        IFs.canselEvent(
          'newTaskCanselBtn',
          'newTaskInputArea',
          'newTaskCanselBtnCls',
          createTaskButon
        );
        // add event are
        Projects.addProject(tasks);
      });
    }
  }
  //
  static addNewTask() {
    const add = document.getElementById('newTaskAddBtn');
    add.addEventListener('click', (e) => {
      e.preventDefault();
      if (!e.target.classList.contains('newTaskAddBtnCls')) {
        return;
      }
      const inputProject = document.getElementById('newTaskInputTitle');
      const taskContentHeaderId = document.getElementById(
        'taskContentHeaderId'
      ).innerText;
      const todo = new Todo(inputProject);
      todo.setList = inputProject.value;

      // add input project to local storage
      Todos.setTasksToLocal(todo, taskContentHeaderId);
      inputProject.value = '';
    });
  }
  static setTasksToLocal(todo, taskContentHeaderId) {
    const currentTtem = JSON.parse(localStorage.getItem('projects'));

    if (currentTtem !== null) {
      let items = true;
      currentTtem.projects.forEach((item) => {
        if (item.title === taskContentHeaderId) {
          item.todos.forEach((it) => {
            if (it.title === todo.title) {
              alert('task already exsist');
              items = false;
            }
          });
        }
      });
      if (items) {
        currentTtem.projects.forEach((item) => {
          if (item.title === taskContentHeaderId) {
            item.todos.push(todo);
            Todos.setNewTask(todo);
          }
        });
      }

      localStorage.setItem('projects', JSON.stringify(currentTtem));
    }
  }
  static setNewTask(todos) {
    //set tasks to right  side
    const taskListArea = document.getElementById('newTasksId');
    const newTasks = document.createElement('div');
    newTasks.classList.add('newTasks');
    newTasks.setAttribute('id', todos.title);
    newTasks.innerHTML += `
                        <div class="taskDetailCls">
                        <input class='isOkButtons'  id="+"isOkButton"  type='radio'${
                          todos.isOk ? 'checked' : 'false'
                        }>
                        </div>
                        <div class="taskDetailCls"><p>${todos.title}</p></div>
                        <div class="taskDetailCls"><p> ${
                          todos.description
                        }</p></div>`;
    if (todos.dueDate !== null || todos.dueDate !== '') {
      newTasks.innerHTML += `
                            <div class="taskDetailDateCls" id="noDateId"><p>No Date</p></div>
                            `;
    } else {
      newTasks.innerHTML += `
                            <div class="taskDetailCls" id="dueDate">${todos.dueDate} <p>Date:</p></div>
                            `;
    }
    newTasks.innerHTML += `
                        <div class="taskCloseBtnCls"> <button id="taskCloseBtnId">X</button></div>
                        `;
    taskListArea.appendChild(newTasks); //<div class="taskDetailCls"> <input type="date" ></input></div>  ||todos.dueDate !==""
  }
  static createTaskButton(text, id) {
    const createProjectButton = document.createElement('BUTTON');
    createProjectButton.innerHTML = text;
    createProjectButton.setAttribute('id', `${id}`);
    return createProjectButton;
  }
  static openInputTaskArea() {
    const createTakInputArea = document.getElementById('createTaskId');
    const createTaskButon = document.getElementById('createTaskButton');
    const div = document.createElement('div');
    div.classList.add('newProjectAdd');
    div.setAttribute('id', 'newTaskInputArea');
    //btn groups
    const divBtn = document.createElement('div');
    divBtn.classList.add('inputBtnGroups');
    divBtn.setAttribute('id', 'inputBtnGroupsTasks');
    //input area
    const divInput = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('id', 'newTaskInputTitle');
    divInput.setAttribute('id', 'newTaskInput');
    divInput.appendChild(input);
    //add button
    const btnAdd = document.createElement('BUTTON');
    btnAdd.setAttribute('id', 'newTaskAddBtn'); //it must be uniqie
    btnAdd.classList.add('newTaskAddBtnCls');
    btnAdd.innerHTML = 'Add';
    //cansel button
    const btnCansel = document.createElement('BUTTON');
    btnCansel.setAttribute('id', 'newTaskCanselBtn');
    btnCansel.classList.add('newTaskCanselBtnCls');
    btnCansel.innerHTML = 'Cansel';
    div.appendChild(divInput);
    divBtn.appendChild(btnAdd);
    divBtn.appendChild(btnCansel);
    //append elements
    div.appendChild(divBtn);
    createTakInputArea.appendChild(div);
    createTaskButon.style.display = 'none';
  }
}
Todos;
