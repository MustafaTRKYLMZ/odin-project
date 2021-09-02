import { format } from 'date-fns';
import Actions from '../Actions';

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
  get getList() {
    let newArray = JSON.parse(localStorage.getItem('library'));
    if (newArray === null) {
      newArray = [];
      return;
    }

    this.reloadPage(newArray);
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
    console.log('first content', contentDate);
    contentDate.innerText = '';
    contentDate.innerHTML = `
                        <input type="date" id="dateInput" />
                        `;
  }
  static setDate(e, projects) {
    const newTaskId = document.getElementById('rightContent');

    const haederIdText = document.getElementById(
      'taskContentHeaderId'
    ).innerText;
    let contentText =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .innerText;
    /////////////////////////////////////
    let contentDate = e.target;
    console.log('first content', contentDate);
    contentDate.innerText = '';
    newTaskId.innerHTML += `
                        <input type="date" id="dateInput" />
                        `;
    /* newTaskId.appendChild(`
    <input type="date" id="dateInput" />
    `);
  
   

    ////////////////////////////


    newTaskId.innerHTML += `
                        <input type="date" id="dateInput" />
                        `;
*/
    const dateInpt = document.getElementById('dateInput');

    console.log('hello from date Input', dateInput);
    // dueDateId.addEventListener('click', (ele) => {
    dateInpt.addEventListener('change', (el) => {
      // const newTaskId2 = document.getElementById('newTasksId');
      el.preventDefault();
      const dueDateId = document.getElementById(`dueDate${contentText}`);
      console.log('hello from set Date', el);
      const date = el.target.value;
      const formatedDate = format(new Date(date), 'dd/MM/yyyy');
      dueDateId.innerHTML = `<p>${formatedDate}</p>`;
      dateInput.remove();
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
    });
    //});
  }
}
Todo;
