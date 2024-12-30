const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

const todos = [];

// TODO: What is the purpose of this function?
//Will allow the list to show on page
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  todoList.innerHTML = '';//gives you the opportunity to add text.
  todoCountSpan.textContent = todos.length;//gives the count of the items listed.

  // TODO: Describe the functionality of the following `for` loop.
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];//this creates a new variable called todo that is linked to todos.

    const li = document.createElement('li');//creating new variable "li". Since it is using dcoument.createElement is creating a list in the site.
    li.textContent = todo;//this it will link the li.textContent to the "todo" element.
    li.setAttribute('data-index', i);//this is

    const button = document.createElement('button');
    button.textContent = 'Complete ✔️';

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
function init() {
  // TODO: What is the purpose of the following line of code?
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem('todos', JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === '') {
    return;
  }
  // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = '';

  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener('click', function (event) {
  const element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches('button') === true) {
    const index = element.parentElement.getAttribute('data-index');
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
