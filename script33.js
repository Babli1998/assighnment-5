// Function to get current date
function getCurrentDate() {
  const date = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

// Set current date in the span
document.getElementById("current-date").textContent = getCurrentDate();

document
  .querySelector(".bg-gradient-to-r")
  .addEventListener("click", function () {
    document.getElementById("main-content").classList.add("hidden");
    document.getElementById("question-content").classList.remove("hidden");
  });

document.getElementById("back-button").addEventListener("click", function () {
  document.getElementById("question-content").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
});

document.getElementById("clear-history").addEventListener("click", () => {
  alert("Activity Log Cleared!");
  document.getElementById("activity-log").innerHTML = ""; 
});

let taskCount = 6;
let completedCount = 0;
const taskCounter = document.getElementById("task-count");
const completedCounter = document.getElementById("completed-count");


const themes = [
  "linear-gradient(to right,#3b82f6, #9333ea )", 
  "linear-gradient(to right, #10b981, #facc15)", 
  "linear-gradient(to right, #ec4899, #ef4444)", 
  "linear-gradient(to right, #6366f1, #14b8a6)", 
];

let currentTheme = localStorage.getItem("themeIndex")
  ? parseInt(localStorage.getItem("themeIndex"))
  : 0;

function applyTheme() {
  document.body.style.background = themes[currentTheme];
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  currentTheme = (currentTheme + 1) % themes.length;
  localStorage.setItem("themeIndex", currentTheme);
  applyTheme();
});


applyTheme();

const tasks = [
  {
    title: "Fix Mobile Button Issue",
    company: "Shop Ease",
    deadline: "21 March 2025",
   
  },
  {
    title: "Fix Video Loading Issue",
    company: "Programming Hero",
    deadline: "21 March 2025",
  },
  {
    title: "Add Pay Success Modal",
    company: "Soft Pay",
    deadline: "25 March 2025",
  },
  { title: "Add new reaction", company: "Meta", deadline: "31 March 2025" },
  {
    title: "Integrate AI search",
    company: "Google LLC",
    deadline: "01 April 2025",
  },
  {
    title: "Review Ami Probashi Site",
    company: "Polygon Tech",
    deadline: "5 May 2025",
  },
];

const container = document.getElementById("task-container");

tasks.forEach((task) => {
  const card = document.createElement("div");
  card.className =
    "bg-white shadow-lg rounded-xl p-4 border-l-4 border-blue-500 transition-all duration-300";
  card.innerHTML = `
        <h3 class="text-md font-bold text-gray-900">${task.company}</h3>
        <p class="text-gray-700 font-medium mt-2">${task.title}</p>
        <div class="mt-4 flex justify-between items-center">
            <span class="text-sm text-gray-500 flex items-center">📅 ${task.deadline}</span>
            <button class="bg-purple-600 text-white px-3 py-1 rounded-md completed-btn">Complete</button>
        </div>
    `;
  container.appendChild(card);
});

document.querySelectorAll(".completed-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const taskText = this.closest("div.bg-white").querySelector("p").innerText;
    alert("Congratulations! Task Completed!");

    taskCount--;
    completedCount++;

    taskCounter.innerText = `Task Assigned: ${taskCount}`;
    completedCounter.innerText = `Completed: ${completedCount}`;

    
    this.innerText = "Completed ✔";
    this.disabled = true;
    this.classList.add("opacity-50", "cursor-not-allowed");

    const activityLog = document.getElementById("activity-log");
    const logItem = document.createElement("div");
    logItem.className = "p-2 bg-green-200 rounded-lg";
    logItem.innerHTML = `Task Completed: ${taskText}`;
    activityLog.appendChild(logItem);
  });
});
