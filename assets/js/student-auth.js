// Student authentication
document.addEventListener('DOMContentLoaded', function() {
  // Initialize with a default student if no students exist
  let allStudents = JSON.parse(localStorage.getItem('students') || '[]');
  if (allStudents.length === 0) {
    allStudents = [{
      name: 'Default Student',
      username: 'student',
      password: 'password',
      course: 'Mathematics',
      dateOfJoining: new Date().toISOString().split('T')[0],
      status: 'Active',
      age: 20,
      qualification: 'High School',
      location: 'Local'
    }];
    localStorage.setItem('students', JSON.stringify(allStudents));
  }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check all students (admin-added and approved self-registered)
  const allStudents = JSON.parse(localStorage.getItem('students') || '[]');
    const student = allStudents.find(s => {
    // For students with username (self-registered approved), check username
    if (s.username) {
      return s.username === username && s.password === password;
    }
    // For admin-added students, check name (without spaces)
    return s.name.toLowerCase().replace(/\s+/g, '') === username.toLowerCase() && s.password === password;
  });

  if (student) {
    localStorage.setItem('studentLoggedIn', 'true');
    localStorage.setItem('studentUsername', username);
    localStorage.setItem('studentData', JSON.stringify(student));
    window.location.href = 'dashboard.html';
    return;
  }

  // If not found, show invalid credentials message
  alert('Invalid username or password');
});
