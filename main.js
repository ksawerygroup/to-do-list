const removeTask = () => {
  console.log(event.target.textContent); //przechwycenie tego co klikneliśmy może być this ale musi być function
}
document.querySelectorAll('li').forEach(item => item.addEventListener('click', removeTask));