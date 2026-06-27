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

const date = new Date();
console.log(date.toLocaleDateString('en-US',{weekday:'long'}))

const day = document.getElementById("day");
const time = document.getElementById("time");
const curDate = document.getElementById("curDate");

curDate.innerHTML = date.toLocaleDateString('en-US',{
  day:'numeric',
  month:'long',
  year:'numeric'
})

day.innerHTML = date.toLocaleDateString('en-US',{weekday:'long'});

setInterval(()=>{
  const currentTime = new Date();
  time.innerHTML = currentTime.toLocaleTimeString('en-US',{
  hour:'numeric',
  minute:'2-digit',
  second:'2-digit',
  hour12:true
})
},1000)

const API_KEY = "de7102e5b23fc00318dba10a28e1db86";

const CITY = 'Rawalpindi';
const temp = document.querySelector("#temp");
const weatherDesp = document.querySelector("#weatherDesp");
const windSpeed = document.querySelector("#windSpeed");
const humidity = document.querySelector("#humidity");
const press = document.querySelector("#press");
const city = document.querySelector("#city");

async function getWeather(apiKey,city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`)

    const data = await response.json();
    city.innerHTML = data.name;
    press.innerHTML = data.main.pressure+'hPa';
    humidity.innerHTML = data.main.humidity+'%'
    windSpeed.innerHTML = ((data.wind.speed)*3.6).toFixed(2)+'km/hr'
    weatherDesp.innerHTML = data.weather[0].description
    temp.innerHTML = `${data.main.temp}&deg;C`;
  } catch (error) {
    
  }
}

getWeather(API_KEY,CITY)

const form = document.querySelector("#todoForm");
const allTasks = document.getElementById("allTasks");

// Load tasks from localStorage
let allTaskies = JSON.parse(localStorage.getItem("allTasks")) || [];

// Function to render all tasks
function renderTasks() {

    allTasks.innerHTML = "";

    allTaskies.forEach((task, index) => {

        const div = document.createElement("div");

        div.className =
            "w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4";

        const h1 = document.createElement("h1");
        h1.textContent = task.title;

        const button = document.createElement("button");
        button.textContent = "Mark as Completed";
        button.className =
            "px-3 py-2 rounded bg-green-500 active:scale-95";

        button.addEventListener("click", () => {

            // Remove from array
            allTaskies.splice(index, 1);

            // Save updated array
            localStorage.setItem(
                "allTasks",
                JSON.stringify(allTaskies)
            );

            // Re-render tasks
            renderTasks();

        });

        div.appendChild(h1);
        div.appendChild(button);

        allTasks.appendChild(div);

    });

}

// Show saved tasks on page load
renderTasks();

// Add new task
form.addEventListener("submit", (e) => {

    e.preventDefault();

    const title = e.target[0].value.trim();

    if (title === "") return;

    allTaskies.push({
        title,
        completed: false
    });

    localStorage.setItem(
        "allTasks",
        JSON.stringify(allTaskies)
    );

    renderTasks();

    form.reset();

});

const plans = document.querySelectorAll(".plan");
const allPlanies = JSON.parse(localStorage.getItem("allPlans")) || [];

plans.forEach((plan, index) => {
 
  if (allPlanies[index]) plan.value = allPlanies[index];

  plan.addEventListener("input", () => {
    const currentValues = Array.from(plans).map(p => p.value);
    localStorage.setItem("allPlans", JSON.stringify(currentValues));
  });
});

const quoteElement = document.getElementById("quoteText");

async function updateHourlyQuote() {
  const now = Date.now();
  const savedTime = localStorage.getItem("quoteTimestamp");
  const savedQuote = localStorage.getItem("cachedQuote");
  
  const ONE_HOUR = 3600000; 


  if (savedQuote && savedTime && (now - savedTime < ONE_HOUR)) {
    quoteElement.textContent = savedQuote;
    return;
  }

  try {
 
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    
    const newQuote = `"${data.slip.advice}"`;

    localStorage.setItem("cachedQuote", newQuote);
    localStorage.setItem("quoteTimestamp", now);

    quoteElement.textContent = newQuote;

  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteElement.textContent = savedQuote || "\"Keep moving forward.\"";
  }
}

updateHourlyQuote();

setInterval(updateHourlyQuote, 60000);

const timerDisplay = document.getElementById("timerDisplay");
const timerStatus = document.getElementById("timerStatus");
const startBtn = document.getElementById("startTimer");
const pauseBtn = document.getElementById("pauseTimer");
const resetBtn = document.getElementById("resetTimer");

let countdown = null;
let isWorkMode = true; // true = 25 min Focus, false = 5 min Break
let timeLeft = 25 * 60;

function updateUI() {
  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${mins}:${secs}`;
}

function start() {
  if (countdown !== null) return; // Prevent multiple timers running at once

  countdown = setInterval(() => {
    timeLeft--;
    updateUI();

    if (timeLeft <= 0) {
      clearInterval(countdown);
      countdown = null;
      isWorkMode = !isWorkMode; // Swap modes

      if (isWorkMode) {
        timeLeft = 25 * 60;
        timerStatus.textContent = "Focus Session";
        timerStatus.className = "text-xs uppercase font-semibold text-rose-500 tracking-widest block";
      } else {
        timeLeft = 5 * 60;
        timerStatus.textContent = "Break Time";
        timerStatus.className = "text-xs uppercase font-semibold text-emerald-500 tracking-widest block";
      }

      updateUI();
      start(); // Auto-start the next block
    }
  }, 1000);
}

function pause() {
  clearInterval(countdown);
  countdown = null;
}

function reset() {
  clearInterval(countdown);
  countdown = null;
  isWorkMode = true;
  timeLeft = 25 * 60;
  timerStatus.textContent = "Focus Session";
  timerStatus.className = "text-xs uppercase font-semibold text-rose-500 tracking-widest block";
  updateUI();
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

const habitInput = document.querySelector("#habitInput");
const addHabit = document.querySelector("#addHabit");
const habitList = document.querySelector("#habitList");

const progressBar = document.querySelector("#progressBar");
const percentage = document.querySelector("#percentage");
const streak = document.querySelector("#streak");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

let currentStreak =
JSON.parse(localStorage.getItem("habitStreak")) || 0;

streak.textContent = currentStreak;

renderHabits();

addHabit.addEventListener("click", () => {

    if (habitInput.value.trim() === "") return;

    habits.push({

        title: habitInput.value,

        completed: false

    });

    saveHabits();

    habitInput.value = "";

});

function saveHabits() {

    localStorage.setItem("habits", JSON.stringify(habits));

    renderHabits();

}

function renderHabits() {

    habitList.innerHTML = "";

    habits.forEach((habit, index) => {

        const card = document.createElement("div");

        card.className =
            "flex justify-between items-center bg-zinc-900 border border-zinc-700 rounded-xl p-4";

        card.innerHTML = `

        <div class="flex items-center gap-3">

            <input
            type="checkbox"
            ${habit.completed ? "checked" : ""}
            >

            <h2 class="${
                habit.completed
                ? "line-through text-zinc-500"
                : ""
            }">

                ${habit.title}

            </h2>

        </div>

        <button
        class="delete bg-red-500 px-3 py-2 rounded">

            Delete

        </button>

        `;

        const checkbox =
        card.querySelector("input");

        checkbox.addEventListener("change", () => {

            habits[index].completed =
            checkbox.checked;

            saveHabits();

            updateProgress();

        });

        card.querySelector(".delete")
        .addEventListener("click", () => {

            habits.splice(index,1);

            saveHabits();

            updateProgress();

        });

        habitList.appendChild(card);

    });

    updateProgress();

}

function updateProgress() {

    if(habits.length===0){

        progressBar.style.width="0%";

        percentage.textContent="0%";

        return;

    }

    let completed =
    habits.filter(h=>h.completed).length;

    let percent =
    Math.round((completed/habits.length)*100);

    progressBar.style.width =
    percent+"%";

    percentage.textContent =
    percent+"%";

    if(percent===100){

        currentStreak++;

        streak.textContent=currentStreak;

        localStorage.setItem(
            "habitStreak",
            JSON.stringify(currentStreak)
        );

    }

}
const futureGoals = document.querySelector("#futureGoals");
const futureGoalsPage = document.querySelector("#futureGoalsPage");
const futureGoalsClose = document.querySelector("#futureGoalsClose");

futureGoals.addEventListener("click", () => {
    futureGoalsPage.style.display = "flex";
});

futureGoalsClose.addEventListener("click", () => {
    futureGoalsPage.style.display = "none";
});