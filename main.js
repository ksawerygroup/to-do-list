const removeTask = (e) => {
  //console.log(event.target.textContent); //przechwycenie tego co klikneliśmy może być this ale musi być function
  // e.target.remove();
  // e.target.parentNode.remove();//przechwytuje i usuwa rodzica 
  const index = e.target.dataset.key; //przypisanie naciśniętego data w HTML w tym przypadku z nazwą key

  document.querySelector(`li[data-key='${index}']`).remove(); //pobranie selektora li[data-key='${index}'] z odpowiednim indexem i usunięcie go;

}
document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));