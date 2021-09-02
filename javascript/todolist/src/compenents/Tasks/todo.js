import { format, setDate } from 'date-fns';

export default class Todo {
  title;
  description;
  dueDate;
  priority;
  isOk;
  constructor() {
    (this.description = ''),
      (this.title = ''),
      (this.dueDate = ''),
      (this.priority = 1);
    this.isOk = false;
  }
  set setList(title) {
    //  let books= JSON.parse(localStorage.getItem("library"))
    // if(books === null){
    //     books =[]

    // }
    //   books.push(book)
    //  this.reloadSinglePage(books,book,books.length)
    //   var modal = document.getElementById("myModal");
    //   modal.style.display = "none";
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
    titleInpt.addEventListener('change', (e) => {
      e.preventDefault();
      contentDate.innerText = e.target.value;
      projects.projects.forEach((item) => {
        if (item.title === haederIdText) {
          item.todos.forEach((it) => {
            if (it.title === contentText) {
              it.title = e.target.value;
            }
          });
        }
      });
      localStorage.setItem('projects', JSON.stringify(projects));
    });
  }
  static setDate(e, projects) {
    const newTaskId = document.getElementById('rightContent');
    const haederIdText = document.getElementById(
      'taskContentHeaderId'
    ).innerText;
    let contentText =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .innerText;
    let contentDate = e.target;
    console.log('first content', contentDate);
    contentDate.innerText = '';
    /*
    newTaskId.innerHTML += `
                        <input type="date" id="dateInput" ></input>
                        `;
    */
    contentDate.innerHTML += `
                        <input type="date" id="dateInput" ></input>
                        `;

    const dateInpt = document.getElementById('dateInput');
    console.log('hello from date Input', dateInput);
    dateInpt.addEventListener('change', (el) => {
      e.preventDefault();
      const dueDateId = document.getElementById(`dueDate${contentText}`);
      console.log('hello from set Date', el);
      const date = el.target.value;
      const formatedDate = format(new Date(date), 'dd/MM/yyyy');
      contentDate.innerText = formatedDate; //date
      //contentDate.value = formatedDate;
      console.log('content date', contentDate);
      console.log('content text', dueDateId);
      // dueDateId.appendChild(contentDate);
      /*
      contentDate.innerText = `
                        <p  >${formatedDate}</>
                  `;   */
      dateInput.remove();

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
  }
}
Todo;
