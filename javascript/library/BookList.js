

const book = new Book()
book.getList()
//#notReadButton{
    //------------------------update read status-------------
    document.addEventListener("click",(e)=> {
    let books = JSON.parse(localStorage.getItem("library"))
    let contextChexbox = e.target.previousElementSibling
    let checkboxChecked = e.target.checked
        if(!e.target.classList.contains("readButtons")){
            return;
        }
        let updateItem =  e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        books.forEach((book) => {
                if(checkboxChecked===true){
                    if(book.title==updateItem){
                         book.read="read"
                         contextChexbox = false;
                    }
                }else if(checkboxChecked===false){
                    if(book.title==updateItem){
                        book.read="not read"
                        contextChexbox= true;
                   }
                }
        })
    localStorage.setItem('library', JSON.stringify(books));
    location.reload()
    })


    
/*
 if(content==="Not"){
                    if(book.title==updateItem){
                        if(checkboxChecked){
                             book.read="read"
                             checkboxChecked= false;
                        }
                        
                    }
                           
                }else if(content==="Read"){
                    if(book.title==updateItem){
                        if(!checkboxChecked){
                             book.read="not read"
                        contextChexbox.checked= false;
                        }
                       
                   }
                }

*/

  

   

  