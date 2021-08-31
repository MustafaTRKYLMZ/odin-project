import { format, setDate} from 'date-fns'

export default class Todo {
    title;
    description;
    dueDate;
    priority;
    isOk;
    constructor(){
        this.description="",
        this.title="",
        this.dueDate="",
        this.priority=1
        this.isOk=false;
    }
    set setList(title){
      //  let books= JSON.parse(localStorage.getItem("library"))
       // if(books === null){
       //     books =[]
            
       // }
     //   books.push(book)
      //  this.reloadSinglePage(books,book,books.length)
     //   var modal = document.getElementById("myModal");
     //   modal.style.display = "none";
        this.title=title
    }
    get getList() { 
        let newArray = JSON.parse(localStorage.getItem("library"))
        if(newArray === null){
            newArray =[]
            return
        }
       
        this.reloadPage(newArray)
    }
    reloadPage(newArray){
         let tbodyEl = document.querySelector("tbody")
        newArray.forEach((Element,index) =>{
                tbodyEl.innerHTML +=
                            `<tr ${Element.read==="read"?"class="+"notRead":"class="+"read"}>
                                <td>${index+1}</td>
                                <td>${Element.author}</td>
                                <td>${Element.title}</td>
                                <td>${Element.page}</td>
                                <td ><button class="removeItem" id="removeItem" >remove</button></td>
                                <td>
                                <input class='readButtons'  id="+"readButton"  type='checkbox'${Element.read==="read"?'checked':""}>
                                </td>
                            </tr> 
                            `
        })
    }
    static deleteTask(e,projects){
                const haederIdText = document.getElementById("taskContentHeaderId").innerText
                const content = e.target.lastChild.textContent
                if(content ==="X"){
                    if(confirm("Are you sure to remove this item")){
                            e.target.parentElement.parentElement.remove();
                            let contentText =  e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
                            projects.projects.forEach((item) => {
                                if(item.title ===haederIdText){
                                    item.todos.forEach((it,index)=>{
                                        if(it.title === contentText) {
                                            if (index > -1) {
                                                item.todos.splice(index, 1);
                                            }
                                        }
                                    }) 
                                }
                            })
                            localStorage.setItem('projects', JSON.stringify(projects));
                           
                    }
                }
    }
    static updateTasks(e,projects){
       
        const content = e.target.lastChild.textContent
       // const noDat = document.getElementById(`"noDateId${content}"`)
       
        if(content ==="No Date"){
            Todo.setDate(e,projects)
        }
       
    }
    static setTitle(e,projects){
        const haederIdText = document.getElementById("taskContentHeaderId").innerText
         let contentText =  e.target.parentElement.innerText;
         console.log("contentText",contentText,"headerIdText",haederIdText)
        // break
            let contentDate = e.target
            contentDate.innerText="" 
            contentDate.innerHTML +=
                        `
                        <input type="text" id="titleInput" value="${contentText}"></input>
                        `
            const dateInpt =document.getElementById("titleInput")
            dateInpt.addEventListener("change",(e)=>{
              //  const newTitle=e.target.value
              //  console.log("new Title",newTitle)
              //  const formatedDate = format(new Date(date),"dd/MM/yyyy")
                contentDate.innerText=e.target.value 
                projects.projects.forEach((item) => {
                    if(item.title ===haederIdText){
                        item.todos.forEach((it)=>{
                            if(it.title === contentText) {
                               it.title=e.target.value
                            }
                        }) 
                    }
                })
                localStorage.setItem('projects', JSON.stringify(projects));
            })
    }
    static setDate(e,projects,){
         const haederIdText = document.getElementById("taskContentHeaderId").innerText
         let contentText =  e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
            let contentDate = e.target
            contentDate.innerText="" 
            contentDate.innerHTML +=
                        `
                        <input type="date" id="dateInput" ></input>
                        `
            const dateInpt =document.getElementById("dateInput")
            dateInpt.addEventListener("change",(e)=>{
                const date=e.target.value
                const formatedDate = format(new Date(date),"dd/MM/yyyy")
                contentDate.innerText=formatedDate//date 
                projects.projects.forEach((item) => {
                    if(item.title ===haederIdText){
                        item.todos.forEach((it)=>{
                            if(it.title === contentText) {
                               it.dueDate=formatedDate
                            }
                        }) 
                    }
                })
                localStorage.setItem('projects', JSON.stringify(projects));
            })
       }
    
}Todo
