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
  ul.appendChild(task).textContent = textTask;
}

form.addEventListener('submit', addTask);