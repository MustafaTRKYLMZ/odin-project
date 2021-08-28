
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
}Todo
