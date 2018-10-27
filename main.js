const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const input = document.querySelector('input');
const listItems = document.getElementsByClassName('task');

const removeTask = (e) => {
  e.target.parentNode.remove();
  taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
  e.preventDefault();
  let textTask = input.value;
  if (textTask === "") return;
  input.value = '';
  let task = document.createElement('li');
  task.className = 'task';
  task.innerHTML = textTask + "<button> Usuń</button>";
  toDoList.push(task);
  ul.textContent = '';
  toDoList.forEach((toDoElement, index) => {
    toDoElement.dataset.key = index;
    ul.appendChild(toDoElement);

  })
  ul.appendChild(task);
  taskNumber.textContent = listItems.length;
  task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);