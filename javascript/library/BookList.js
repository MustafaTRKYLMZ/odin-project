

const book = new Book()
book.getList()
//#notReadButton{
    //------------------------update read status-------------
    document.addEventListener("click",(e)=> {
        let books = JSON.parse(localStorage.getItem("library"))
    let content = e.target.textContent
    console.log("readButton",e.target.textContent)
        if(!e.target.classList.contains("readButtons")){
            return;
        }
            
    
        let updateItem =  e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        console.log("contentParent",updateItem)
    
        books.forEach((book) => {
           
                if(content==="Not"){
                    if(book.title==updateItem){
                         book.read="read"
                    }
                           
                }else if(content==="Read"){
                    if(book.title==updateItem){
                        book.read="not read"
                   }
                }
    
        })
        localStorage.setItem('library', JSON.stringify(books));
   location.reload()
    })

  

   

  