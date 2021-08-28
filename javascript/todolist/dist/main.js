(()=>{"use strict";class t{title;description;dueDate;priority;isOk;constructor(){this.description="",this.title="",this.dueDate="",this.priority=1,this.isOk=!1}set setList(t){this.title=t}get getList(){let t=JSON.parse(localStorage.getItem("library"));null!==t?this.reloadPage(t):t=[]}reloadPage(t){let e=document.querySelector("tbody");t.forEach(((t,s)=>{e.innerHTML+=`<tr ${"read"===t.read?"class=notRead":"class=read"}>\n                                <td>${s+1}</td>\n                                <td>${t.author}</td>\n                                <td>${t.title}</td>\n                                <td>${t.page}</td>\n                                <td ><button class="removeItem" id="removeItem" >remove</button></td>\n                                <td>\n                                <input class='readButtons'  id="+"readButton"  type='checkbox'${"read"===t.read?"checked":""}>\n                                </td>\n                            </tr> \n                            `}))}}class e{todos=[];title;constructor(t){this.title=t}set setList(t){this.title=t}get getList(){let t=JSON.parse(localStorage.getItem("library"));null!==t?this.reloadPage(t):t=[]}static getTasks(t){console.log("here is the getTaskButton"),t.addEventListener("click",(t=>{console.log("projects",t.target.id);const s=JSON.parse(localStorage.getItem("projects")),d=document.getElementById("rightSide"),a=document.getElementById("taskContentHeaderId");document.getElementById("rightContent").remove(),null!==a&&a.remove();const i=document.createElement("div");i.classList.add("rightContent"),i.setAttribute("id","rightContent");const c=document.createElement("div");c.classList.add("taskList");const o=document.createElement("div");o.classList.add("newTasksCls"),o.setAttribute("id","newTasksId");const l=document.createElement("div");l.classList.add("newTaskCls"),l.setAttribute("id","oldTasksId"),null!==s&&(s.projects.forEach((e=>{if(e.title===t.target.id){const t=document.createElement("HEADER");t.innerHTML=e.title,t.classList.add("taskContentHeaderCls"),t.setAttribute("id","taskContentHeaderId"),d.appendChild(t)}})),s.projects.forEach((e=>{if(e.title===t.target.id)for(let t=0;t<e.todos.length;t++){const s=e.todos[t],n=document.createElement("div");n.classList.add("tasks"),n.setAttribute("id",s.title),n.innerHTML+=`\n                                            <div class="taskDetailCls">\n                                            <input class='isOkButtons'  id="+"isOkButton"  type='radio'${s.isOk?"checked":"false"}>\n                                            </div>\n                                            <div class="taskDetailCls"><p>${s.title}</p></div>\n                                            <div class="taskDetailCls"><p>${s.description}</p></div>\n                                            <div class="taskDetailCls"><p>${s.dueDate}</p></div>\n                                            <div class="taskDetailCls"><p>${s.priority}</p></div>\n                                            <div class="taskDetailCls" id="dueDate"> <p>No Date</p></div>\n                                            <div class="taskDetailCls"> <input type="date" ></input></div>\n                                        `,s.isOk?l.appendChild(n):o.appendChild(n),c.appendChild(o),c.appendChild(l)}})));const r=document.createElement("div");r.classList.add("createTaskCls"),r.appendChild(e.createTaskButton("+ Add Task","createTaskButton")),i.appendChild(r),i.appendChild(c),d.appendChild(i);const u=document.getElementById("createTaskButton");u.addEventListener("click",(t=>{console.log("task button",t),e.openInputTaskArea(r,"newTaskInputArea","newTaskAddBtn","newTaskCanselBtn","newTaskInputTitle","newTaskInput","inputBtnGroupsTask","newTaskCanselBtnCls","newTaskAddBtnCls",u),n.canselEvent("newTaskCanselBtn","newTaskInputArea","newTaskCanselBtnCls",u),e.addTask(s,o,c)}))}))}static createTask(t){console.log("here is create Task funtion"),null!==t&&t.addEventListener("click",(d=>{d.preventDefault(),console.log("here is new project",d);const a=document.getElementById("createTaskCls");console.log("//////////////",a),e.openInputTaskArea(a,"newProjectInputArea","newProjectAddBtn","newProjectCanselBtn","newProjectInputTitle","newProjectInput","inputBtnGroupsProject","newProjectCanselBtnCls","newProjectAddBtnCls",t),n.canselEvent("newProjectCanselBtn","newProjectInputArea","newProjectCanselBtnCls",t),s.addProject(a)}))}static createTaskButton(t,s){const n=document.createElement("BUTTON");return n.innerHTML=t,n.setAttribute("id",`${s}`),e.createTask(n),console.log("hello from create project button"),n}static openInputTaskArea(t,e,s,n,d,a,i,c,o,l){console.log("sssssss",t);const r=document.createElement("div");r.classList.add("newProjectAdd"),r.setAttribute("id",e);const u=document.createElement("div");u.classList.add("inputBtnGroups"),u.setAttribute("id",i);const p=document.createElement("div"),m=document.createElement("input");m.setAttribute("id",d),p.setAttribute("id",a),p.appendChild(m);const C=document.createElement("BUTTON");C.setAttribute("id",s),C.classList.add(o),C.innerHTML="Add";const h=document.createElement("BUTTON");h.setAttribute("id",n),h.classList.add(c),h.innerHTML="Cansel",r.appendChild(p),u.appendChild(C),u.appendChild(h),r.appendChild(u),t.appendChild(r),l.style.display="none"}static addTask(e,s,n){console.log("ad Task current item",e);const d=document.getElementById("taskContentHeaderId");document.getElementById("newTaskAddBtn").addEventListener("click",(a=>{if(a.preventDefault(),!a.target.classList.contains("newTaskAddBtnCls"))return;const i=document.getElementById("newTaskInputTitle"),c=new t;c.setList=i.value,e.projects.forEach((t=>{t.title===d.innerText&&(t.todos.push(c),console.log("todos ",t))})),i.value="";const o=document.createElement("div");o.classList.add("tasks"),o.setAttribute("id",c.title),o.innerHTML+=`\n                    <div class="taskDetailCls">\n                        <input class='isOkButtons'  id="+"isOkButton"  type='radio'${c.isOk?"checked":"false"}>\n                        </div>\n                        <div class="taskDetailCls"><p>${c.title}</p></div>\n                        <div class="taskDetailCls"><p>${c.description}</p></div>\n                        <div class="taskDetailCls"><p>${c.dueDate}</p></div>\n                        <div class="taskDetailCls"><p>${c.priority}</p></div>\n                        <div class="taskDetailCls"> <p>No Date</p></div>\n                        <div class="taskDetailCls"> <input type="date" ></input></div>\n                    `,s.appendChild(o),n.appendChild(s),localStorage.setItem("projects",JSON.stringify(e))}))}}class s{projects=[];constructor(){this.projects}set setList(t){this.projects.push(t)}get getList(){let t=JSON.parse(localStorage.getItem("projects"));return null===t?new s:t}static setProjectsToLocal(t){const e=JSON.parse(localStorage.getItem("projects"));console.log("xxxxxx",e),null!==e?(e.projects.push(t),localStorage.setItem("projects",JSON.stringify(e))):localStorage.setItem("projects",JSON.stringify(t))}static createProject(t){console.log("here is create project funtion"),null!==t&&t.addEventListener("click",(e=>{e.preventDefault(),console.log("here is new project",e);const d=document.getElementById("projects");console.log("//////////////",d),n.openInputArea(d,"newProjectInputArea","newProjectAddBtn","newProjectCanselBtn","newProjectInputTitle","newProjectInput","inputBtnGroupsProject","newProjectCanselBtnCls","newProjectAddBtnCls",t),n.canselEvent("newProjectCanselBtn","newProjectInputArea","newProjectCanselBtnCls",t),s.addProject(d)}))}static addProject(t){console.log("Hello from add project button"),document.getElementById("newProjectAddBtn").addEventListener("click",(n=>{if(n.preventDefault(),!n.target.classList.contains("newProjectAddBtnCls"))return;const d=document.getElementById("newProjectInputTitle"),a=new s,i=new e(d);i.setList=d.value,a.setList=i,console.log("new project",d.value),s.setProjects(d.value,t),s.setProjectsToLocal(i),d.value=""}))}static setProjects(t,e){const s=document.createElement("div");return s.innerHTML=t,s.classList.add("projectList"),s.setAttribute("id",t),e.appendChild(s),e}setCurrentProjects(t,n){console.log("hello from Projects =====",t);const d=t.getList;null!==d&&d.projects.forEach((t=>{s.setProjects(t.title,n)})),e.getTasks(n)}static openInputArea(t,e,s,n,d,a,i,c,o,l){console.log("sssssss",t);const r=document.createElement("div");r.classList.add("newProjectAdd"),r.setAttribute("id",e);const u=document.createElement("div");u.classList.add("inputBtnGroups"),u.setAttribute("id",i);const p=document.createElement("div"),m=document.createElement("input");m.setAttribute("id",d),p.setAttribute("id",a),p.appendChild(m);const C=document.createElement("BUTTON");C.setAttribute("id",s),C.classList.add(o),C.innerHTML="Add";const h=document.createElement("BUTTON");h.setAttribute("id",n),h.classList.add(c),h.innerHTML="Cansel",r.appendChild(p),u.appendChild(C),u.appendChild(h),r.appendChild(u),t.insertBefore(r,t.firstChild),l.style.display="none"}deleteProject(){}updateProject(){}}class n{static createHeader(){const t=document.createElement("HEADER"),e=document.createElement("IMG");return e.setAttribute("src","images/todoListIcon.png"),e.setAttribute("width","204"),e.setAttribute("height","128"),e.setAttribute("alt","Image not found"),t.appendChild(e),t.classList.add("header"),t}static createLeftSideBar(){const t=new s,e=document.createElement("div");return e.setAttribute("id","leftSide"),e.classList.add("leftSideBar"),e.appendChild(n.timeLine()),e.appendChild(n.createProjectButton("+ New Project","createProjectButton")),e.appendChild(n.projects(t)),e}static createRightSideBar(){const t=document.createElement("div");t.setAttribute("id","rightSide"),t.classList.add("rightSideBar");const e=document.createElement("div");return e.classList.add("rightContent"),e.setAttribute("id","rightContent"),e.innerHTML="Assignments",t.appendChild(e),t}static openInputArea(t,e,s,n,d,a,i,c,o,l){console.log("sssssss",t);const r=document.createElement("div");r.classList.add("newProjectAdd"),r.setAttribute("id",e);const u=document.createElement("div");u.classList.add("inputBtnGroups"),u.setAttribute("id",i);const p=document.createElement("div"),m=document.createElement("input");m.setAttribute("id",d),p.setAttribute("id",a),p.appendChild(m);const C=document.createElement("BUTTON");C.setAttribute("id",s),C.classList.add(o),C.innerHTML="Add";const h=document.createElement("BUTTON");h.setAttribute("id",n),h.classList.add(c),h.innerHTML="Cansel",r.appendChild(p),u.appendChild(C),u.appendChild(h),r.appendChild(u),t.insertBefore(r,t.firstChild),l.style.display="none"}static canselEvent(t,e,s,n){const d=document.getElementById(t),a=document.getElementById(e);d.addEventListener("click",(t=>{t.preventDefault(),console.log("here is cansel button",t),t.target.classList.contains(s)&&(a.remove(),n.style.display="block")}))}static createCenterBody(){console.log("Hello Dear Center");const t=document.createElement("div"),e=n.createLeftSideBar(),s=n.createRightSideBar();return t.setAttribute("id","centerBody"),t.appendChild(e),t.appendChild(s),t}static timeLine(){const t=document.createElement("div");t.classList.add("timeLine"),t.setAttribute("id","timeLine");const e=document.createElement("div");e.classList.add("nextMonth"),e.setAttribute("id","nextMonth"),e.innerHTML="Next Month";const s=document.createElement("div");s.classList.add("nextSevenDays"),s.setAttribute("id","nextSevenDays"),s.innerHTML="Next 7 Days";const n=document.createElement("div");return n.setAttribute("id","today"),n.classList.add("today"),n.innerHTML="Today",t.appendChild(e),t.appendChild(s),t.appendChild(n),t}static createProjectButton(t,e){const n=document.createElement("BUTTON");return n.innerHTML=t,n.setAttribute("id",`${e}`),s.createProject(n),console.log("hello from create project button"),n}static projects(t){const e=document.createElement("div"),s=document.createElement("p");return s.setAttribute("id","projectsP"),e.classList.add("projects"),e.setAttribute("id","projects"),s.innerHTML="PROJECTS",e.appendChild(s),t.setCurrentProjects(t,e),console.log("Projects",t),e}static loadPage(){document.body.appendChild(n.createHeader()),document.body.appendChild(n.createCenterBody()),console.log("=================",n)}}n.loadPage()})();