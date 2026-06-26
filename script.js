const one = document.querySelector("#one");
const toDo = document.querySelector("#toDo");
const toDoClose = document.querySelector("#toDoClose");

one.addEventListener("click",()=>{
  toDo.style.display='flex'
})

toDoClose.addEventListener("click",()=>{
  toDo.style.display = 'none'
})