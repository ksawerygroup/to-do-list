const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const input = document.querySelector('input');
const listItems = document.getElementsByClassName('task');

const removeTask = (e) => {
  // e.target.parentNode.remove();
  const toDoListIndex = e.target.parentNode.dataset.key;
  toDoList.splice(toDoListIndex, 1);

  renderList();

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

  renderList();

  ul.appendChild(task);
  taskNumber.textContent = listItems.length;
  task.querySelector('button').addEventListener('click', removeTask);
}
const renderList = () => {
  ul.textContent = '';
  toDoList.forEach((toDoElement, index) => {
    toDoElement.dataset.key = index;
    ul.appendChild(toDoElement);
  })
}
form.addEventListener('submit', addTask);