
 window.addEventListener('DOMContentLoaded', (event) => {
     event.preventDefault()
    const book = new Book()
    book.getList
});
    //------------------------update read status-------------
    document.addEventListener("click",(e)=> {
        e.preventDefault()
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



   

  