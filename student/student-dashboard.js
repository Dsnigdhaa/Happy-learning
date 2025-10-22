// Student dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
  // Check if student is logged in
  if (!localStorage.getItem('studentLoggedIn')) {
    window.location.href = 'student-login.html';
  }

  // Sidebar toggle
  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
  });

  // Logout button
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('studentLoggedIn');
    localStorage.removeItem('studentUsername');
    window.location.href = 'student-login.html';
  });
});

// Modal functions
function openModal(type) {
  const modal = document.getElementById('modal' + type.charAt(0).toUpperCase() + type.slice(1));
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal(type) {
  const modal = document.getElementById('modal' + type.charAt(0).toUpperCase() + type.slice(1));
  if (modal) {
    modal.style.display = 'none';
  }
}

// Quick actions
function submitAssignment() {
  alert('Assignment submission feature would be implemented here.');
}

function downloadMaterial() {
  alert('Material download feature would be implemented here.');
}

function joinLiveClass(title) {
  alert(`Joining live class: ${title}`);
}

function watchRecordedClass() {
  alert('Recorded class viewing feature would be implemented here.');
}

function submitFeedback() {
  alert('Feedback submission feature would be implemented here.');
}

// Profile modal (placeholder)
function openProfileModal() {
  alert('Profile modal would be implemented here.');
}

// Student Phase Recordings (Edureka-like functionality)
const phaseRecordings = [
  {
    title: "Phase 1: Introduction to Mathematics",
    thumbnail: "https://img.youtube.com/vi/_lK4cX7u2AQ/maxresdefault.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Phase 2: Algebra Basics",
    thumbnail: "https://img.youtube.com/vi/ScHgGumN9c0/maxresdefault.jpg",
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    title: "Phase 3: Geometry Fundamentals",
    thumbnail: "https://img.youtube.com/vi/Gjnup-PuquQ/maxresdefault.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Phase 4: Calculus Introduction",
    thumbnail: "https://img.youtube.com/vi/7Vtl2QHh8nA/maxresdefault.jpg",
    video: "https://www.w3schools.com/html/movie.mp4"
  }
];

// Load phase recordings dynamically
const phaseContainer = document.getElementById("phaseRecordingsContainer");

function loadPhaseRecordings(list) {
  phaseContainer.innerHTML = "";
  list.forEach(rec => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${rec.thumbnail}" alt="Thumbnail" class="thumbnail">
      <div class="card-body">
        <h3>${rec.title}</h3>
        <a href="#" class="play-btn" data-video="${rec.video}">▶ Play</a>
      </div>
    `;
    phaseContainer.appendChild(card);
  });
}

// Search functionality for phase recordings
document.getElementById("phaseSearchInput").addEventListener("keyup", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = phaseRecordings.filter(r => r.title.toLowerCase().includes(query));
  loadPhaseRecordings(filtered);
});

// Modal player for phase recordings
const phaseModal = document.getElementById("phaseVideoModal");
const phasePlayer = document.getElementById("phaseVideoPlayer");
const closePhaseModal = document.getElementById("closePhaseModal");

phaseContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("play-btn")) {
    e.preventDefault();
    const videoSrc = e.target.dataset.video;
    phasePlayer.src = videoSrc;
    phaseModal.style.display = "flex";
  }
});

closePhaseModal.onclick = () => {
  phaseModal.style.display = "none";
  phasePlayer.pause();
};

window.onclick = (e) => {
  if (e.target == phaseModal) {
    phaseModal.style.display = "none";
    phasePlayer.pause();
  }
};

// Initialize phase recordings on page load
document.addEventListener('DOMContentLoaded', function() {
  // Existing code...
  loadPhaseRecordings(phaseRecordings);
});
