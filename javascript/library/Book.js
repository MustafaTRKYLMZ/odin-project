

function Book(author,title,page,read){
    this.author=author,
    this.title=title,
    this.page=page,
    this.read=read

}
//---------------------------dd boot to local storage-------------------------------
Book.prototype.addBookToLibrary= function (book) {
    console.log("book in addbook to library")
    let books= JSON.parse(localStorage.getItem("library"))
   
    books.push(book)
    console.log("books",books)
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
   
}

//-------------------get book from localstorage---------------------------
Book.prototype.getList = function () { 
  let newArray = JSON.parse(localStorage.getItem("library"))
  console.log("new array",newArray)
    let tbodyEl = document.querySelector("tbody")
  //  if(newArray !== null){
    console.log("new array length   ",newArray.length)
        for(i=0;i<newArray.length;i++){
            console.log("new array in body",newArray)
            tbodyEl.innerHTML +=
                    `<tr ${newArray[i].read==="read"?"class="+"notRead":"class="+"read"}>
                        <td>${i+1}</td>
                        <td>${newArray[i].author}</td>
                        <td>${newArray[i].title}</td>
                        <td>${newArray[i].page}</td>
                        <td ><button class="removeItem" id="removeItem" >remove</button></td>
                        <td>
                         <input class='readButtons'  id="+"readButton"  type='checkbox'${newArray[i].read==="read"?'checked':""}>
                        </td>
                    </tr>
                    `
        }
   // }
        
}

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
            console.log("content",content)
            books.forEach((book, index) => {
            if(book.title === content) {
                if (index > -1) {
                    books.splice(index, 1);
                }
            }
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
   console.log("book", book)
   book.addBookToLibrary(book)
}


