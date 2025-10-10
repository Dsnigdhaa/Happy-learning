// Complaints management for admin
let complaints = JSON.parse(localStorage.getItem('complaints')) || [];

// Initialize with sample data if empty
if (complaints.length === 0) {
  complaints = [
    {
      submitted_by: 'student',
      student: 'John Doe',
      type: 'platform',
      trainer: '',
      complaint: 'The website is slow and takes too long to load pages.',
      date: '2023-10-01',
      status: 'pending'
    },
    {
      submitted_by: 'student',
      student: 'Jane Smith',
      type: 'trainer',
      trainer: 'Mr. Johnson',
      complaint: 'Trainer is not clear in explanations during live classes.',
      date: '2023-10-02',
      status: 'resolved'
    },
    {
      submitted_by: 'student',
      student: 'Bob Lee',
      type: 'platform',
      trainer: '',
      complaint: 'Materials are outdated and need to be updated.',
      date: '2023-10-03',
      status: 'pending'
    },
    {
      submitted_by: 'student',
      student: 'Alice Brown',
      type: 'trainer',
      trainer: 'Ms. Davis',
      complaint: 'Assignments are too difficult and not aligned with lessons.',
      date: '2023-10-04',
      status: 'pending'
    },
    {
      submitted_by: 'student',
      student: 'Charlie Wilson',
      type: 'trainer',
      trainer: 'Mr. Smith',
      complaint: 'Trainer does not respond to questions promptly.',
      date: '2023-10-05',
      status: 'pending'
    },
    {
      submitted_by: 'student',
      student: 'Diana Prince',
      type: 'trainer',
      trainer: 'Ms. Lee',
      complaint: 'Live classes are not interactive enough.',
      date: '2023-10-06',
      status: 'resolved'
    },
    {
      submitted_by: 'student',
      student: 'Eve Adams',
      type: 'trainer',
      trainer: 'Mr. Brown',
      complaint: 'Trainer uses outdated teaching methods.',
      date: '2023-10-07',
      status: 'pending'
    },
    {
      submitted_by: 'student',
      student: 'Frank Miller',
      type: 'trainer',
      trainer: 'Ms. Taylor',
      complaint: 'Feedback on assignments is not detailed.',
      date: '2023-10-08',
      status: 'pending'
    },
    {
      submitted_by: 'trainer',
      student: 'Mr. Johnson',
      type: 'platform',
      trainer: '',
      complaint: 'The admin panel is difficult to navigate and lacks features.',
      date: '2023-10-09',
      status: 'pending'
    },
    {
      submitted_by: 'trainer',
      student: 'Ms. Davis',
      type: 'platform',
      trainer: '',
      complaint: 'Uploading materials takes too long and often fails.',
      date: '2023-10-10',
      status: 'resolved'
    },
    {
      submitted_by: 'trainer',
      student: 'Mr. Smith',
      type: 'platform',
      trainer: '',
      complaint: 'Attendance tracking is inaccurate and needs improvement.',
      date: '2023-10-11',
      status: 'pending'
    },
    {
      submitted_by: 'trainer',
      student: 'Dr. Lee',
      type: 'platform',
      trainer: '',
      complaint: 'The reporting tools are outdated and do not provide real-time data.',
      date: '2023-10-12',
      status: 'pending'
    },
    {
      submitted_by: 'trainer',
      student: 'Prof. Kim',
      type: 'platform',
      trainer: '',
      complaint: 'Video conferencing integration is poor and often disconnects.',
      date: '2023-10-13',
      status: 'resolved'
    },
    {
      submitted_by: 'trainer',
      student: 'Ms. Patel',
      type: 'platform',
      trainer: '',
      complaint: 'Assignment submission deadlines are not clearly communicated.',
      date: '2023-10-14',
      status: 'pending'
    }
  ];
  localStorage.setItem('complaints', JSON.stringify(complaints));
}

let currentComplaintIndex = -1;

function loadStudentPlatformComplaints() {
  const tableBody = document.getElementById('studentPlatformComplaintsTableBody');
  tableBody.innerHTML = '';

  const studentPlatformComplaints = complaints.filter(c => c.submitted_by === 'student' && c.type === 'platform');

  studentPlatformComplaints.forEach((complaint, index) => {
    const globalIndex = complaints.indexOf(complaint);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${complaint.student}</td>
      <td>${complaint.complaint}</td>
      <td>${complaint.date}</td>
      <td>${complaint.status}</td>
      <td>
        <button onclick="viewComplaint(${globalIndex})">View</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function loadStudentTrainerComplaints() {
  const tableBody = document.getElementById('studentTrainerComplaintsTableBody');
  tableBody.innerHTML = '';

  const studentTrainerComplaints = complaints.filter(c => c.submitted_by === 'student' && c.type === 'trainer');

  studentTrainerComplaints.forEach((complaint, index) => {
    const globalIndex = complaints.indexOf(complaint);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${complaint.student}</td>
      <td>${complaint.trainer}</td>
      <td>${complaint.complaint}</td>
      <td>${complaint.date}</td>
      <td>${complaint.status}</td>
      <td>
        <button onclick="viewComplaint(${globalIndex})">View</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function loadTrainerPlatformComplaints() {
  const tableBody = document.getElementById('trainerPlatformComplaintsTableBody');
  tableBody.innerHTML = '';

  const trainerPlatformComplaints = complaints.filter(c => c.submitted_by === 'trainer' && c.type === 'platform');

  trainerPlatformComplaints.forEach((complaint, index) => {
    const globalIndex = complaints.indexOf(complaint);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${complaint.student}</td>
      <td>${complaint.complaint}</td>
      <td>${complaint.date}</td>
      <td>${complaint.status}</td>
      <td>
        <button onclick="viewComplaint(${globalIndex})">View</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function updateCards() {
  const total = complaints.length;
  const pending = complaints.filter(c => c.status === 'pending').length;
  const resolved = complaints.filter(c => c.status === 'resolved').length;

  document.getElementById('total-complaints').textContent = total;
  document.getElementById('pending-complaints').textContent = pending;
  document.getElementById('resolved-complaints').textContent = resolved;
}

function viewComplaint(index) {
  currentComplaintIndex = index;
  const complaint = complaints[index];
  const label = complaint.submitted_by === 'trainer' ? 'Trainer' : 'Student';
  document.getElementById('modalSubmitterLabel').textContent = label + ':';
  document.getElementById('modalStudent').textContent = complaint.student;
  document.getElementById('modalType').textContent = complaint.type === 'platform' ? 'Happy Learning' : 'Trainer';
  document.getElementById('modalTrainer').textContent = complaint.trainer || 'N/A';
  document.getElementById('modalTrainerField').style.display = complaint.type === 'trainer' ? 'block' : 'none';
  document.getElementById('modalComplaint').textContent = complaint.complaint;
  document.getElementById('modalDate').textContent = complaint.date;
  document.getElementById('modalStatus').textContent = complaint.status;
  document.getElementById('complaintModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('complaintModal').style.display = 'none';
}

function resolveComplaintFromModal() {
  if (currentComplaintIndex >= 0) {
    complaints[currentComplaintIndex].status = 'resolved';
    localStorage.setItem('complaints', JSON.stringify(complaints));
    loadStudentPlatformComplaints();
    loadStudentTrainerComplaints();
    loadTrainerPlatformComplaints();
    updateCards();
    closeModal();
  }
}

// Search functionality
document.getElementById('studentPlatformSearch').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const rows = document.querySelectorAll('#studentPlatformComplaintsTableBody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
});

document.getElementById('studentTrainerSearch').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const rows = document.querySelectorAll('#studentTrainerComplaintsTableBody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
});

document.getElementById('trainerPlatformSearch').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const rows = document.querySelectorAll('#trainerPlatformComplaintsTableBody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
});

// Load on page load
document.addEventListener('DOMContentLoaded', function() {
  loadStudentPlatformComplaints();
  loadStudentTrainerComplaints();
  loadTrainerPlatformComplaints();
  updateCards();
});
