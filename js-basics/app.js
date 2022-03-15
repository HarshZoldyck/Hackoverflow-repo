//book class:represents a book

class Book{
    constructor(title,author,isbn)
    {
        this.author=author;this.isbn=isbn;this.title=title;
    }
}


//ui class : handle ui task

class UI
{
      static displayBooks(){
         
          const books=store.getbooks();
          books.forEach((book)=>UI.addbooktolist(book));
      }
     static addbooktolist(book){
            const list=document.querySelector('#book-list');
            const row=document.createElement('tr');
            row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;
            list.appendChild(row);
     }

     static showAlert(message,className){
              const div=document.createElement('div');
              div.className=`alert alert-${className}`;
              div.appendChild(document.createTextNode(message));
              const container=document.querySelector('.container');
              const form=document.querySelector('#book-form');
              container.insertBefore(div,form);
              //vanish in 3 sec
              setTimeout(function(){
                  document.querySelector('.alert').remove();
              },3000)
     }

     static clearfields(){
         document.querySelector('#title').value='';
         document.querySelector('#author').value='';
         document.querySelector('#isbn').value='';
     }
     static deletebook(el)
     {
         if(el.classList.contains('delete'))
         {
             el.parentElement.parentElement.remove();
         }
     }
}

//store class;handles storage

class store{
    static getbooks(){
             let books;
             if(localStorage.getItem('books')==null)
             {books=[];}
             else{
                 books=JSON.parse(localStorage.getItem('books'));
             }

             return books;
    }
    static addbooks(book){
                 const books=store.getbooks();
                 books.push(book);
                 localStorage.setItem('books',JSON.stringify(books));
    }
    static removebook(isbn){
        const books=store.getbooks();
        books.forEach((book,index)=>{
              if(book.isbn==isbn){
                  books.splice(index,1);
              }
        });
        localStorage.setItem('books',JSON.stringify(books));

        

    }
}



//event:display book
document.addEventListener('DOMContentLoaded',UI.displayBooks);



//event;add book


document.querySelector('#book-form').addEventListener('submit',(e)=>{
    //prevent actual submit
    e.preventDefault();
//get form values
const title=document.querySelector('#title').value;
const author=document.querySelector('#author').value;
const isbn=document.querySelector('#isbn').value;
//validate
if(title==''||author==''||isbn=='')
{
   UI.showAlert('Please fill in all fields','danger');
}else{
//instantiate
const book=new Book(title,author,isbn);
console.log(book);
// add book to list
UI.addbooktolist(book);
//add book to store
store.addbooks(book);
//show succes
UI.showAlert('Book Added','success');
//clear fields
UI.clearfields();}
});


//event remove book
document.querySelector('#book-list').addEventListener('click',function(e)
{
    UI.deletebook(e.target);
    // remove book from store
    store.removebook(e.target.parentElement.previousElementSibling.textContent);

    UI.showAlert('Book removed','success');
});