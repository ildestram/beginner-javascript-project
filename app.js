// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// EVENT LISTENERS
// nel momento in cui l'utente clicca (click) aggiungiamo un addTodo che andiamo a dichiarare nella sezione functions
todoButton.addEventListener('click', addTodo);

// FUNCTIONS
function addTodo(event){
    // prevent form from submitting
    event.preventDefault();
    // creo il div todo
    const todoDiv = document.createElement('div');
    // al todoDiv gli devo aggiungere una classe
    todoDiv.classList.add('todo');
    // creo al suo interno una li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to list
    todoList.appendChild(todoDiv);
    // clear Todo Input Value
    todoInput.value = "";
}

