// ====== Sample Data ======
const students = [
  { name: "John Doe", course: "Mathematics", status: "Present" },
  { name: "Jane Smith", course: "Biology", status: "Absent" },
  { name: "Mike Johnson", course: "Physics", status: "Present" }
];

const trainers = [
  { name: "Mr. Alex", course: "Physics", status: "Present" },
  { name: "Ms. Emma", course: "Chemistry", status: "On Leave" }
];

const courses = [
  { title: "Mathematics Basics", popularity: 80 },
  { title: "Physics Fundamentals", popularity: 70 },
  { title: "Chemistry Intro", popularity: 60 }
];

const assignments = [
  { title: "Algebra Assignment", course: "Mathematics", due: "2025-09-25", status: "Pending" },
  { title: "Chemistry Lab", course: "Chemistry", due: "2025-09-22", status: "Submitted" },
  { title: "Physics Quiz", course: "Physics", due: "2025-09-24", status: "Overdue" }
];

const recordedClasses = [
  { title: "Algebra Basics", course: "Mathematics", link: "#" },
  { title: "Organic Chemistry", course: "Chemistry", link: "#" }
];

const liveClasses = [
  { title: "Physics Lecture", trainer: "Mr. Alex", date: "2025-09-20", link: "#" },
  { title: "Biology Lab", trainer: "Ms. Emma", date: "2025-09-21", link: "#" }
];

const recentActivity = [
  "John Doe submitted Algebra Assignment",
  "Ms. Emma updated Chemistry Lab materials",
  "New course 'Mathematics Basics' added"
];

const holidays = [
  { date: "2025-09-21", name: "Teacher's Day" },
  { date: "2025-10-02", name: "Gandhi Jayanti" },
  { date: "2025-12-25", name: "Christmas" }
];

// ====== Populate Stats ======
document.getElementById("studentCount").innerText = students.length;
document.getElementById("trainerCount").innerText = trainers.length;
document.getElementById("courseCount").innerText = courses.length;
document.getElementById("assignmentCount").innerText = assignments.length;
document.getElementById("materialCount").innerText = 20; // static example
document.getElementById("videoCount").innerText = 18; // static example

// ====== Populate Top Courses ======
const topCoursesContainer = document.getElementById("topCourses");
courses.forEach(course => {
  const div = document.createElement("div");
  div.className = "top-course";
  div.innerHTML = `
    <div class="title">${course.title}</div>
    <div class="bar"><i style="width:${course.popularity}%"></i></div>
  `;
  topCoursesContainer.appendChild(div);
});

// ====== Populate Assignments ======
const assignmentTableBody = document.querySelector("#assignmentTable tbody");
assignments.forEach(a => {
  const tr = document.createElement("tr");
  let statusClass = "";
  if (a.status === "Pending") statusClass = "status-pending";
  else if (a.status === "Submitted") statusClass = "status-sub";
  else if (a.status === "Overdue") statusClass = "status-over";

  tr.innerHTML = `
    <td>${a.title}</td>
    <td>${a.course}</td>
    <td>${a.due}</td>
    <td><span class="badge-status ${statusClass}">${a.status}</span></td>
  `;
  assignmentTableBody.appendChild(tr);
});

// ====== Populate Attendance Tables ======
const studentTableBody = document.querySelector("#studentTable tbody");
students.forEach(s => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${s.name}</td><td>${s.course}</td><td>${s.status}</td>`;
  studentTableBody.appendChild(tr);
});

const trainerTableBody = document.querySelector("#trainerTable tbody");
trainers.forEach(t => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${t.name}</td><td>${t.course}</td><td>${t.status}</td>`;
  trainerTableBody.appendChild(tr);
});

// ====== Populate Recorded Classes ======
const recordedTableBody = document.querySelector("#recordedTable tbody");
recordedClasses.forEach(r => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${r.title}</td><td>${r.course}</td><td><a href="${r.link}" target="_blank">Watch</a></td>`;
  recordedTableBody.appendChild(tr);
});

// ====== Populate Live Classes ======
const liveTableBody = document.querySelector("#liveTable tbody");
liveClasses.forEach(l => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${l.title}</td><td>${l.trainer}</td><td>${l.date}</td><td><a href="${l.link}" target="_blank">Join</a></td>`;
  liveTableBody.appendChild(tr);
});

// ====== Populate Recent Activity ======
const activityList = document.getElementById("activityList");
recentActivity.forEach(a => {
  const li = document.createElement("li");
  li.textContent = a;
  activityList.appendChild(li);
});

// ====== Populate Holidays ======
const holidaysList = document.getElementById("holidaysList");
holidays.forEach(h => {
  const li = document.createElement("li");
  li.textContent = `${h.date}: ${h.name}`;
  holidaysList.appendChild(li);
});
