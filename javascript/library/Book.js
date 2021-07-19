

class Book {
    author;
    title;
    page;
    read;
    constructor(author,title,page,read){
        this.author=author,
        this.title=title,
        this.page=page,
        this.read=read
    }
    reloadSinglePage(books,book,length) {
        let tbodyEl = document.querySelector("tbody")
        tbodyEl.innerHTML +=
        `<tr ${book.read==="read"?"class="+"notRead":"class="+"read"}>
            <td>${length}</td>
            <td>${book.author}</td>
            <td>${book.title}</td>
            <td>${book.page}</td>
            <td ><button class="removeItem" id="removeItem" >remove</button></td>
            <td>
            <input class='readButtons'  id="+"readButton"  type='checkbox'${book.read==="read"?'checked':""}>
            </td>
        </tr> 
        `
         localStorage.setItem("library",JSON.stringify(books))
    }
    set setList(book){
        let books= JSON.parse(localStorage.getItem("library"))
        if(books === null){
            books =[]
            
        }
        books.push(book)
        this.reloadSinglePage(books,book,books.length)
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
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
}


//---------------------------dd boot to local storage-------------------------------

//---------------------------------create Style -------------------
function createStyle(){
    let books= JSON.parse(localStorage.getItem("library"))
    let tryArea = document.getElementById("tryArea")
    if(books !== null){
        books.forEach((book) =>{
                if(book.read ===false){
                    tryArea.classList.add("read")
                }
            }) 
    }
}

//-------------------get book from localstorage---------------------------


//-------------------------remove Item in table ------------------------------


document.querySelector('#book-list').addEventListener("click",(e)=> {
    if(!e.target.classList.contains("removeItem")){
        return;
    } else {
         e.target.parentElement.parentElement.remove();
    }
    let books = JSON.parse(localStorage.getItem("library"))
    if(confirm("Are you sure to remove this item")){
            let content =  e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
            books.forEach((book, index) => {
            if(book.title === content) {
                if (index > -1) {
                    books.splice(index, 1);
                }
            }
          location.reload()
        })
    localStorage.setItem('library', JSON.stringify(books));
    }
})

//------------------------set ıtem to Arry and localstarage---------------------------
function insertFunction(){
   const author=document.getElementById('author').value;
   const title=document.getElementById('title').value;
   const page = document.getElementById('page').value;
   const read = document.getElementById('status').value;
   let book = new Book(author,title,page,read)
   book.setList = book
}


