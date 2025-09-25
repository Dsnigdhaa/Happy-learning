// admin.js - handles modals, buttons, search, and interactions on admin dashboard

// Modal handling - Note: openAddModal is now handled in dashboard.js to avoid conflicts
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'none';
}

// Close modals when clicking outside modal content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// Delete row from table
function deleteRow(button) {
  const row = button.closest('tr');
  if (row) row.remove();
}

// Search/filter table rows by input
function setupSearch(inputId, tableId) {
  const input = document.getElementById(inputId);
  const table = document.getElementById(tableId);
  if (!input || !table) return;
  input.addEventListener('input', () => {
    const filter = input.value.toLowerCase();
    const rows = table.tBodies[0].rows;
    for (let row of rows) {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(filter) ? '' : 'none';
    }
  });
}

// Setup all search inputs
document.addEventListener('DOMContentLoaded', () => {
  setupSearch('assignmentSearch', 'assignmentTable');
  setupSearch('studentSearch', 'studentTable');
  setupSearch('trainerSearch', 'trainerTable');
  setupSearch('recordedSearch', 'recordedTable');
  setupSearch('liveSearch', 'liveTable');
  setupSearch('globalSearch', 'studentTable'); // example global search on students, can be expanded

  // Setup search for add-student.html and add-trainer.html pages
  setupSearch('studentSearch', 'studentTable');
  setupSearch('trainerSearch', 'trainerTable');

  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      alert('Logging out...');
      // Implement actual logout logic here
    });
  }

  // Notification bell click
  const notifBell = document.getElementById('notifBell');
  if (notifBell) {
    notifBell.addEventListener('click', () => {
      alert('No new notifications');
      // Implement notification panel toggle here
    });
  }
});
