const form = document.querySelector('form');
const ul = document.querySelector('ul');
const h1 = document.querySelector('h1 span');
const input = document.querySelector('input');

const addTask = (e) => {
  e.preventDefault();
  let textTask = input.value;
  if (textTask === "") return;
  input.value = '';
  let task = document.createElement('li');
  task.className = 'task';
  task.innerHTML = textTask + "<button> Usuń</button>";
  ul.appendChild(task);

}

form.addEventListener('submit', addTask);