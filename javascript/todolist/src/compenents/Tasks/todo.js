import { format } from 'date-fns';
import Actions from '../Actions';
import { IFs } from '../IFs';
import Todos from './todos';

export default class Todo {
  title;
  description;
  dueDate;
  priority;
  isOk;
  static contentDate;
  constructor() {
    (this.description = ''),
      (this.title = ''),
      (this.dueDate = ''),
      (this.priority = 1);
    this.isOk = false;
  }
  set setList(title) {
    this.title = title;
  }

  static changeStatus(projects, e) {
    const haederIdText = document.getElementById(
      'taskContentHeaderId'
    ).innerText;
    const todoTitle =
      e.target.parentElement.nextSibling.nextSibling.firstChild.innerText;
    //  const taskList = document.getElementById('tasklistId');
    const CurentNewTasks = document.getElementById('newTasksId');
    const CurentOldTasks = document.getElementById('oldTasksId');
    const newTasks = document.createElement('div'); // currentItem, taskList,CurentNewTasks, CurentOldTasks,
    const oldTasks = document.createElement('div');
    newTasks.classList.add('newTasks');
    newTasks.setAttribute('id', todoTitle);
    oldTasks.classList.add('oldTasks');
    oldTasks.setAttribute('id', todoTitle);

    projects.projects.forEach((item) => {
      if (item.title === haederIdText) {
        item.todos.forEach((it) => {
          if (it.title === todoTitle) {
            if (it.isOk) {
              it.isOk = false;
              // e.target.parentElement.parentElement.remove();
              e.target.parentElement.parentElement.remove();
              newTasks.innerHTML += `
                                                <div class="taskDetailCls">
                                                <input class='isOkButtons'  id="+"isOkButton"  type='radio'${
                                                  it.isOk ? 'checked' : 'false'
                                                }>
                                                </div>
                                                <div class="taskDetailCls"><p>${
                                                  it.title
                                                }</p></div>
                                                <div class="taskDetailCls"><p>${
                                                  it.description
                                                }</p></div>`;
              if (it.dueDate === null || it.dueDate === '') {
                newTasks.innerHTML += `
                                                    <div class="taskDetailDateCls" id="noDateId${it.title}"><p>No Date</p></div>
                                                    `;
              } else {
                newTasks.innerHTML += `
                                                    <div class="taskDetailDateCls" id="dueDate${it.title}"><p>${it.dueDate}</p></div>
                                                    `;
              }
              newTasks.innerHTML += `
                                                <div class="taskCloseBtnCls"> <button  id="taskCloseBtnId">X</button></div>
                                                `;
              //----------------
              CurentNewTasks.appendChild(newTasks);
              //   taskList.appendChild(CurentNewTasks);
            } else {
              it.isOk = true;
              e.target.parentElement.parentElement.remove();
              oldTasks.innerHTML += `
          <div class="taskDetailCls">
          <input class='isOkButtons'  id="+"isOkButton"  type='radio'${
            it.isOk ? 'checked' : 'false'
          }>
          </div>
          <div class="taskDetailCls"><p>${it.title}</p></div>
          <div class="taskDetailCls"><p>${it.description}</p></div>`;
              if (it.dueDate === null || it.dueDate === '') {
                oldTasks.innerHTML += `
              <div class="taskDetailDateCls" id="noDateId${it.title}"><p>No Date</p></div>
              `;
              } else {
                oldTasks.innerHTML += `
              <div class="taskDetailDateCls" id="dueDate${it.title}"><p>${it.dueDate}</p></div>
              `;
              }
              oldTasks.innerHTML += `
          <div class="taskCloseBtnCls"> <button  id="taskCloseBtnId">X</button></div>
          `;
              CurentOldTasks.appendChild(oldTasks);
              //  taskList.appendChild(CurentOldTasks);
            }
          }
        });
      }
    });
    //   Actions.changeTaskArea(projects, todoTitle);
    localStorage.setItem('projects', JSON.stringify(projects));
    // Actions.getActions();
  }

  static deleteTask(e, projects) {
    const haederIdText = document.getElementById(
      'taskContentHeaderId'
    ).innerText;
    const content = e.target.lastChild.textContent;
    if (content === 'X') {
      if (confirm('Are you sure to remove this item')) {
        e.target.parentElement.parentElement.remove();
        let contentText =
          e.target.parentElement.previousElementSibling.previousElementSibling
            .previousElementSibling.innerText;
        projects.projects.forEach((item) => {
          if (item.title === haederIdText) {
            item.todos.forEach((it, index) => {
              if (it.title === contentText) {
                if (index > -1) {
                  item.todos.splice(index, 1);
                }
              }
            });
          }
        });
        localStorage.setItem('projects', JSON.stringify(projects));
      }
    }
  }

  static setTitle(e, projects) {
    const haederIdText = document.getElementById(
      'taskContentHeaderId'
    ).innerText;
    let contentText = e.target.parentElement.innerText;
    // break
    let contentDate = e.target;
    contentDate.innerText = '';
    contentDate.innerHTML += `
                        <input type="text" id="titleInput" value="${contentText}"></input>
                        `;
    const titleInpt = document.getElementById('titleInput');
    titleInpt.addEventListener('change', (el) => {
      e.preventDefault();
      contentDate.innerText = el.target.value;
      projects.projects.forEach((item) => {
        if (item.title === haederIdText) {
          item.todos.forEach((it) => {
            if (it.title === contentText) {
              it.title = el.target.value;
            }
          });
        }
      });
      localStorage.setItem('projects', JSON.stringify(projects));
    });
  }
  static setDateInputArea(e) {
    let contentDate = e.target;
    contentDate.innerText = '';
    contentDate.innerHTML = `
                        <input type="date" id="dateInput" />
                        `;
  }
  static setDate(e, projects) {
    const haederIdText = document.getElementById(
      'taskContentHeaderId'
    ).innerText;
    let contentText =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .innerText;
    Todos.creaModel();
    IFs.modelContent();
    const dateInpt = document.getElementById('dateInput');
    dateInpt.addEventListener('change', (el) => {
      el.preventDefault();
      const dueDateId = document.getElementById(`dueDate${contentText}`);
      const noDateId = document.getElementById(`noDateId${contentText}`);
      const date = el.target.value;
      const formatedDate = format(new Date(date), 'dd/MM/yyyy');
      if (dueDateId !== null) {
        dueDateId.innerHTML = `<p>${formatedDate}</p>`;
      }
      if (noDateId !== null) {
        noDateId.innerHTML = `<p>${formatedDate}</p>`;
      }
      Actions.getActions();
      projects.projects.forEach((item) => {
        if (item.title === haederIdText) {
          item.todos.forEach((it) => {
            if (it.title === contentText) {
              it.dueDate = formatedDate;
            }
          });
        }
      });
      localStorage.setItem('projects', JSON.stringify(projects));
      var modal = document.getElementById('myModal');
      modal.remove();
    });
  }
}
Todo;
