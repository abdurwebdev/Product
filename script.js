const one = document.querySelector("#one");
const toDo = document.querySelector("#toDo");
const toDoClose = document.querySelector("#toDoClose");
const dailyPlanner = document.querySelector("#dailyPlanner");
const dailyPlannerToOpen = document.querySelector("#dailyPlannerToOpen");
const toClosePlan = document.querySelector("#toClosePlan");
const dailyGoals= document.querySelector("#dailyGoals");
const dailyGoalsToOpen = document.querySelector("#dailyGoalsToOpen");
const dailyGoalsToClose = document.querySelector("#dailyGoalsToClose");
const pomodoro = document.querySelector("#pomodoro");
const pomodoroToOpen = document.querySelector("#pomodoroToOpen");
const pomodoroToClose = document.querySelector("#pomodoroToClose");
const themeButton = document.querySelector("#themeButton");
const main = document.querySelectorAll("main");

one.addEventListener("click",()=>{
  toDo.style.display='flex'
})

dailyPlanner.addEventListener("click",()=>{
   dailyPlannerToOpen.style.display = 'flex'
})

dailyGoals.addEventListener("click",()=>{
  dailyGoalsToOpen.style.display = 'flex'
})

pomodoro.addEventListener("click",()=>{
   pomodoroToOpen.style.display='flex'
})
let currentTheme = 'dark';
themeButton.addEventListener("click",()=>{
 main.forEach((page)=>{
  if(currentTheme === 'dark'){
    currentTheme = 'light';
  }
  else if(currentTheme === 'light'){
    currentTheme = 'cyber-dark'
  }
  else if(currentTheme === 'cyber-dark'){
    currentTheme = 'cyber-light'
  }
  else{
    currentTheme = 'dark'
  }
 })
 main.forEach((page)=>{
  page.setAttribute("data-theme",currentTheme)
 })
})

pomodoroToClose.addEventListener("click",()=>{
  pomodoroToOpen.style.display = 'none'
})


toDoClose.addEventListener("click",()=>{
  toDo.style.display = 'none'
})

toClosePlan.addEventListener("click",()=>{
  dailyPlannerToOpen.style.display= 'none'
})

dailyGoalsToClose.addEventListener("click",()=>{
  dailyGoalsToOpen.style.display = 'none'
})