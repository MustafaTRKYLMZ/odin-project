import { IFs } from './IFs';
import Todo from './Tasks/todo';
import Todos from './Tasks/todos';
import { format } from 'date-fns';

export default class Actions {
  static getActions() {
    console.log('Hello from actions');
    let projects = JSON.parse(localStorage.getItem('projects'));
    // Todo.updateTasks()
    const newTasksId = document.getElementById('newTasksId');
    /*
    let contentText;
    newTasksId.addEventListener('click', (e) => {
      e.preventDefault();

      contentText =
        e.target.parentElement.previousElementSibling.previousElementSibling
          .innerText;
      console.log('content text', contentText);
      const dueDateId = document.getElementById(`dueDate${contentText}`);
      if (dueDateId !== null) {
        dueDateId.addEventListener('click', (el) => {
          Todo.setDateInputArea(el);
        });
      }
    });
*/

    newTasksId.addEventListener('click', (e) => {
      e.preventDefault();

      console.log('path', e.path);

      if (e.path[1].className === 'taskDetailDateCls') {
        // Todo.setDateInputArea(e);
        //   Actions.modelContent(e);
        Todo.setDate(e, projects);
      } else if (e.path[1].className === 'taskDetailCls') {
        console.log('listener', e.target);
        Todo.setTitle(e, projects);
      } else if (e.path[1].className === 'taskCloseBtnCls') {
        Todo.deleteTask(e, projects);
      }
    });
  }
  static modelContent(e) {
    const newTaskId = document.getElementById('rightContent');

    let contentDate = e.target;
    newTaskId.innerHTML += `
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
          <span class="close">&times;</span>
          <p id="addNewBookHeader" >Add New Date</p>
            <form class="inputArea">
                <input type="date" id="dateInput" />
              </form>
          </div>
      </div>
      <!--         ===========================-->
      `;
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById('newTaskId');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal
    btn.onclick = function () {
      modal.style.display = 'block';
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };

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
  }

  static getTimeLineTasks() {
    IFs.clearRightSideBar();
    let projects = JSON.parse(localStorage.getItem('projects'));
    if (projects !== null) {
      const timeLn = document.getElementById('today');
      const nextSevenDays = document.getElementById('nextSevenDays');
      // const nextThirtyDays = document.getElementById("nextMonth")

      const todayDate = format(new Date(), 'dd/MM/yyyy');
      const todayArray = [];
      //choose todays tasks/////////////////////////////////////////////////////
      projects.projects.forEach((item) => {
        item.todos.forEach((it) => {
          if (it.dueDate === todayDate) {
            todayArray.push(it);
          }
        });
      });
      const day = 'Today';
      Todos.setTimeTaskToRigtSide(todayArray, day);
      //  Actions.getActions()
      //Today
      timeLn.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.path[0].className === 'today') {
          const todayArray = [];
          IFs.clearRightSideBar();
          let projects = JSON.parse(localStorage.getItem('projects'));
          projects.projects.forEach((item) => {
            item.todos.forEach((it) => {
              if (it.dueDate === todayDate) {
                todayArray.push(it);
              }
            });
          });
          const day = 'Today';
          Todos.setTimeTaskToRigtSide(todayArray, day);
          // Actions.getActions()
        }
      });
      // set next Seven Days Tasks
      nextSevenDays.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.path[0].className === 'nextSevenDays') {
          let projects = JSON.parse(localStorage.getItem('projects'));
          IFs.clearRightSideBar();
          const day = 'Next Seven Days';
          const nextSevenDaysArray = [];
          var firstDay = new Date();
          var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);
          const nextSevenDate = format(nextWeek, 'dd/MM/yyyy');
          projects.projects.forEach((item) => {
            item.todos.forEach((it) => {
              const nextWeekCount = parseInt(nextSevenDate);
              const itDateCount = parseInt(it.dueDate);
              const diference = nextWeekCount - itDateCount;
              if (0 <= diference && 7 >= diference) {
                nextSevenDaysArray.push(it);
              }
            });
          });
          Todos.setTimeTaskToRigtSide(nextSevenDaysArray, day);
        }
        //   Actions.getActions()
      });
    }
  }
}
Actions;
