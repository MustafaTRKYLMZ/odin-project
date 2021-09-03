import { IFs } from './IFs';
import Todo from './Tasks/todo';
import Todos from './Tasks/todos';
import { format } from 'date-fns';

export default class Actions {
  static getActions() {
    const newTasksId = document.getElementById('newTasksId');
    newTasksId.addEventListener('click', (e) => {
      e.preventDefault();
      let projects = JSON.parse(localStorage.getItem('projects'));
      if (e.target.id === '+') {
        Todo.changeStatus(projects, e);
      }
      if (e.path[1].className === 'taskDetailDateCls') {
        Todo.setDate(e, projects);
      } else if (e.path[1].className === 'taskDetailCls') {
        Todo.setTitle(e, projects);
      } else if (e.path[1].className === 'taskCloseBtnCls') {
        Todo.deleteTask(e, projects);
      }
    });
    const oldTasksId = document.getElementById('oldTasksId');
    oldTasksId.addEventListener('click', (e) => {
      e.preventDefault();
      let projects = JSON.parse(localStorage.getItem('projects'));
      if (e.target.id === '+') {
        Todo.changeStatus(projects, e);
      }
      if (e.path[1].className === 'taskDetailDateCls') {
        Todo.setDate(e, projects);
      } else if (e.path[1].className === 'taskDetailCls') {
        Todo.setTitle(e, projects);
      } else if (e.path[1].className === 'taskCloseBtnCls') {
        Todo.deleteTask(e, projects);
      }
    });
  }
  static getTimeLineTasks() {
    IFs.clearRightSideBar();
    let projects = JSON.parse(localStorage.getItem('projects'));
    if (projects !== null) {
      const timeLn = document.getElementById('today');
      const nextSevenDays = document.getElementById('nextSevenDays');
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
      });
    }
  }
}
Actions;
