

function Book(author,title,page,read){
    this.author=author,
    this.title=title,
    this.page=page,
    this.read=read

}
//---------------------------dd boot to local storage-------------------------------
Book.prototype.addBookToLibrary= function (book) {
    let books= JSON.parse(localStorage.getItem("library"))
    books.push(book)
    localStorage.setItem("library",JSON.stringify(books))
};
//---------------------------------create Style -------------------
function createStyle(){
    let books= JSON.parse(localStorage.getItem("library"))
      let tryArea = document.getElementById("tryArea")
    books.forEach((book) =>{
        if(book.read ===false){
              
                 tryArea.classList.add("read")
        }
    }) 
    
/*
    tbodyEl.innerHTML +=
    `<tr>
        <td>${i+1}</td>
        <td>${newArray[i].author}</td>
        <td>${newArray[i].title}</td>
        <td>${newArray[i].page}</td>
        <td>${newArray[i].read}</td>
        <td><button class="removeItem" id="removeItem" >remove</button></td>
    </tr>
    `
    */
}

//-------------------get book from localstorage---------------------------
Book.prototype.getList = function () { 
  let newArray = JSON.parse(localStorage.getItem("library"))
    createStyle();
    let tbodyEl = document.querySelector("tbody")
        for(i=0;i<newArray.length;i++){
            tbodyEl.innerHTML +=
                    `<tr>
                        <td>${i+1}</td>
                        <td>${newArray[i].author}</td>
                        <td>${newArray[i].title}</td>
                        <td>${newArray[i].page}</td>
                        <td>${newArray[i].read}</td>
                        <td><button class="removeItem" id="removeItem" >remove</button></td>
                    </tr>
                    `
        }
}
/*
function removeBook (e) {
   // let tableEl = document.querySelector("table")
   // e.preventDefault();
    if(!e.target.classList.contains("removeItem")){
        return;
    }
    let books = JSON.parse(localStorage.getItem("library"))
    
    if(confirm("Are you sure to remove this item")){
            let btn = e.target
            
            let content =  e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            console.log("content",content)
            books.forEach((book, index) => {
            if(book.title === content) {
            books.splice(index, 1);
            }
        })
            localStorage.setItem('library', JSON.stringify(books));
            btn.closest("tr").remove();
        console.log("Books",books)
    }
  
}
*/

//-------------------------remove Item in table ------------------------------


document.querySelector('#book-list').addEventListener("click",(e)=> {

    if(!e.target.classList.contains("removeItem")){
        return;
    } else {
         e.target.parentElement.parentElement.remove();
    }
    let books = JSON.parse(localStorage.getItem("library"))
    
    if(confirm("Are you sure to remove this item")){
        
           // let array =[];

            let content =  e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            console.log("content",content)
            books.forEach((book, index) => {
            if(book.title === content) {
                if (index > -1) {
           books.splice(index, 1);
                }
            }
        })
        localStorage.setItem('library', JSON.stringify(books));
        console.log("Books",books)
    }
  

})

//------------------------set ıtem to Arry and localstarage---------------------------
function insertFunction(){
   const author=document.getElementById('author').value;
   const title=document.getElementById('title').value;
   const page = document.getElementById('page').value;
   const read=false;
   console.log("Read content",read)
let book = new Book(author,title,page,read)

book.addBookToLibrary(book)
}




///--------------------------------Store class
