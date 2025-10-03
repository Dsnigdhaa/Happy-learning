console.log("dashboard.js loaded");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded event fired");
  // Sample Data
  let students = [
    { name:'John Doe', age: 20, qualification: 'High School', location: 'New York', course:'Mathematics', status:'Active', dateOfJoining:'2024-01-15' },
    { name:'Jane Smith', age: 22, qualification: 'Bachelor', location: 'California', course:'Biology', status:'Active', dateOfJoining:'2024-02-10' },
    { name:'Mark Lee', age: 21, qualification: 'Bachelor', location: 'Texas', course:'Physics', status:'Absent', dateOfJoining:'2024-03-05' },
    { name:'Emily Davis', age: 23, qualification: 'Master', location: 'Florida', course:'Chemistry', status:'Active', dateOfJoining:'2024-04-20' },
    { name:'Alice Johnson', age: 20, qualification: 'High School', location: 'New York', course:'Mathematics', status:'Active', dateOfJoining:'2024-05-12' },
    { name:'Bob Wilson', age: 22, qualification: 'Bachelor', location: 'California', course:'Biology', status:'Absent', dateOfJoining:'2024-06-18' },
    { name:'Charlie Brown', age: 21, qualification: 'Bachelor', location: 'Texas', course:'Physics', status:'Active', dateOfJoining:'2024-07-25' },
    { name:'Diana Prince', age: 23, qualification: 'Master', location: 'Florida', course:'Chemistry', status:'Active', dateOfJoining:'2024-08-30' }
  ];

  let trainers = [
    { name:'Mr. Alex', age: 40, qualification: 'PhD Physics', location: 'New York', experience: '10 years', course:'Physics', status:'Active', dateOfJoining:'2023-01-10' },
    { name:'Ms. Emma', age: 35, qualification: 'MSc Chemistry', location: 'California', experience: '8 years', course:'Chemistry', status:'On Leave', dateOfJoining:'2023-02-15' },
    { name:'Dr. Smith', age: 45, qualification: 'PhD Mathematics', location: 'Texas', experience: '15 years', course:'Mathematics', status:'Active', dateOfJoining:'2023-03-20' },
    { name:'Prof. Johnson', age: 50, qualification: 'PhD Biology', location: 'Florida', experience: '20 years', course:'Biology', status:'Active', dateOfJoining:'2023-04-25' },
    { name:'Mr. Lee', age: 38, qualification: 'MSc Physics', location: 'New York', experience: '12 years', course:'Physics', status:'Absent', dateOfJoining:'2023-05-30' }
  ];

  let courses = [
    { title:'Math Basics', duration:'3 months', popularity:120 },
    { title:'Physics Advanced', duration:'4 months', popularity:90 },
    { title:'Chemistry Intro', duration:'2 months', popularity:60 },
    { title:'Biology Fundamentals', duration:'3 months', popularity:80 },
    { title:'Computer Science', duration:'5 months', popularity:100 }
  ];

  let assignments = [
    { title:'Algebra Homework', course:'Math Basics', due:'2025-09-25', status:'Pending' },
    { title:'Physics Lab', course:'Physics Advanced', due:'2025-09-22', status:'Submitted' },
    { title:'Chemistry Report', course:'Chemistry Intro', due:'2025-09-28', status:'Pending' },
    { title:'Biology Quiz', course:'Biology Fundamentals', due:'2025-09-30', status:'Overdue' },
    { title:'CS Project', course:'Computer Science', due:'2025-10-05', status:'Pending' }
  ];

  let materials = [
    { title:'Math Notes', link:'#' },
    { title:'Physics Slides', link:'#' },
    { title:'Chemistry Handbook', link:'#' },
    { title:'Biology Diagrams', link:'#' },
    { title:'CS Tutorials', link:'#' }
  ];

  let liveClasses = [
    { title:'Math Live Session', trainer:'Mr. Alex', date:'2025-09-21', link:'https://zoom.us/j/1234567890' },
    { title:'Physics Discussion', trainer:'Dr. Smith', date:'2025-09-23', link:'https://meet.google.com/abc-defg-hij' },
    { title:'Chemistry Lab', trainer:'Ms. Emma', date:'2025-09-25', link:'https://zoom.us/j/0987654321' },
    { title:'Biology Review', trainer:'Prof. Johnson', date:'2025-09-27', link:'https://meet.google.com/xyz-uvw-rst' }
  ];

  let recordedClasses = [
    { title:'Chemistry Recorded', course:'Chemistry Intro', link:'https://www.youtube.com/watch?v=ysz5S6PUM-U' },
    { title:'Math Basics Video', course:'Math Basics', link:'https://www.youtube.com/watch?v=jNQXAC9IVRw' },
    { title:'Physics Lecture', course:'Physics Advanced', link:'https://www.youtube.com/watch?v=ScMzIvxBSi4' },
    { title:'Biology Session', course:'Biology Fundamentals', link:'https://www.youtube.com/watch?v=aqz-KE-bpKQ' },
    { title:'CS Workshop', course:'Computer Science', link:'https://www.youtube.com/watch?v=3fumBcKC6RE' }
  ];

  let holidays = [
    { name:'Independence Day', date:'2025-08-15' },
    { name:'Christmas', date:'2025-12-25' },
    { name:'New Year', date:'2025-01-01' },
    { name:'Diwali', date:'2025-11-01' },
    { name:'Eid', date:'2025-06-15' }
  ];

  let notifications = [
    'New student registered: John Doe',
    'Math Basics course updated'
  ];

  let pendingTasks = [
    { task: 'Approve new student registration', type: 'Student', date: '2025-09-20' },
    { task: 'Review course update request', type: 'Course', date: '2025-09-21' },
    { task: 'Approve new trainer profile', type: 'Trainer', date: '2025-09-22' },
    { task: 'Verify assignment submission', type: 'Assignment', date: '2025-09-23' }
  ];

  // Populate Counts
  function safeSetTextContent(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }
  safeSetTextContent('studentCount', students.length);
  safeSetTextContent('trainerCount', trainers.length);
  safeSetTextContent('courseCount', courses.length);
  safeSetTextContent('assignmentCount', assignments.length);
  safeSetTextContent('materialCount', materials.length);
  safeSetTextContent('videoCount', recordedClasses.length);

  // Populate Tables
  function populateTable(id, data, columns, updateCount, type) {
    const tbody = document.querySelector(`#${id} tbody`);
    tbody.innerHTML = '';
    if (data.length === 0) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = columns.length + 1; // +1 for actions column
      td.style.textAlign = 'center';
      td.style.color = 'rgba(199, 24, 24, 0.6)';
      td.textContent = 'No data found';
      tr.appendChild(td);
      tbody.appendChild(tr);
      return;
    }
    data.forEach((item, index) => {
      const tr = document.createElement('tr');
      columns.forEach(col => {
        const td = document.createElement('td');
        if (col === 'link' && type === 'recorded') {
          // Link to new video player page with video URL as query param
          // Fix path to recorded classes page to avoid double /admin/admin/ and encode space as %20
          td.innerHTML = `<a href="/admin/recorded%20classes.html?video=${encodeURIComponent(item[col])}" target="_blank">Watch</a>`;
        } else if (col === 'link' && type === 'live') {
          td.innerHTML = `<a href="${item[col]}" target="_blank">Join</a>`;
        } else if (col === 'name' && (type === 'student' || type === 'trainer')) {
          // Make name clickable for attendance view
          const link = document.createElement('a');
          link.href = '#';
          link.textContent = item[col];
          link.style.color = '#00d4ff';
          link.style.textDecoration = 'none';
          link.onclick = (e) => {
            e.preventDefault();
            viewIndividualAttendance(item[col], type);
          };
          td.appendChild(link);
        } else {
          td.textContent = item[col];
        }
        tr.appendChild(td);
      });
      const actionTd = document.createElement('td');
      const editBtn = document.createElement('button');
      editBtn.textContent='Edit';
      editBtn.className='edit-btn';
      editBtn.onclick = () => window.editRow(type, index);
      actionTd.appendChild(editBtn);
      const delBtn = document.createElement('button');
      delBtn.textContent='Delete';
      delBtn.className='delete-btn';
      delBtn.onclick = () => {
        if (confirm('Are you sure you want to delete this item?')) {
          data.splice(index, 1);
          populateTable(id, data, columns, updateCount, type);
          if (updateCount) updateCount();
        }
      };
      actionTd.appendChild(delBtn);
      tr.appendChild(actionTd);
      tbody.appendChild(tr);
    });
    if (updateCount) updateCount();
  }

  function updateStudentCount(){ document.getElementById('studentCount').textContent = students.length; }
  function updateTrainerCount(){ document.getElementById('trainerCount').textContent = trainers.length; }
  function updateCourseCount(){ document.getElementById('courseCount').textContent = courses.length; }
  function updateAssignmentCount(){ document.getElementById('assignmentCount').textContent = assignments.length; }
  function updateMaterialCount(){ document.getElementById('materialCount').textContent = materials.length; }
  function updateVideoCount(){ document.getElementById('videoCount').textContent = recordedClasses.length; }

  populateTable('studentTable', students, ['name','age','qualification','location','course','dateOfJoining','status'], updateStudentCount, 'student');
  populateTable('trainerTable', trainers, ['name','age','qualification','location','experience','course','dateOfJoining','status'], updateTrainerCount, 'trainer');
  populateTable('assignmentTable', assignments, ['title','course','due','status'], updateAssignmentCount, 'assignment');
  populateTable('recordedTable', recordedClasses, ['title','course','link'], updateVideoCount, 'recorded');
  populateTable('liveTable', liveClasses, ['title','trainer','date','link'], null, 'live');

  // Recent Activities
  let recentActivities = [
    'Student John Doe enrolled in Math Basics - 2 hours ago',
    'Assignment "Physics Lab" submitted by Jane Smith - 1 day ago',
    'New course "Advanced Chemistry" added - 3 days ago',
    'Trainer Ms. Emma marked attendance for Biology class - 5 days ago',
    'Holiday "Independence Day" scheduled - 1 week ago'
  ];

  // Populate recent activities
  const activityList = document.getElementById('activityList');
  if(activityList){
    activityList.innerHTML = '';
    recentActivities.forEach(a => {
      const li = document.createElement('li');
      li.textContent = a;
      activityList.appendChild(li);
    });
  }

  // Populate holidays
  const holidaysList = document.getElementById('holidaysList');
  holidays.forEach(h => {
    const li = document.createElement('li');
    li.textContent = `${h.name} - ${h.date}`;
    holidaysList.appendChild(li);
  });

  // Notifications
  const notifList = document.getElementById('notifList');
  function updateNotifications(){
    notifList.innerHTML='';
    notifications.forEach(n=>{
      const li=document.createElement('li'); li.textContent=n;
      notifList.appendChild(li);
    });
    document.getElementById('notifBadge').textContent = notifications.length;
  }
  updateNotifications();

  // Populate Pending Tasks
  const pendingTasksTableBody = document.querySelector('#pendingTasksTable tbody');
  function populatePendingTasks(){
    if(!pendingTasksTableBody) return;
    pendingTasksTableBody.innerHTML = '';
    if(pendingTasks.length === 0){
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = 4;
      td.style.textAlign = 'center';
      td.style.color = 'rgba(255,255,255,0.6)';
      td.textContent = 'No pending tasks';
      tr.appendChild(td);
      pendingTasksTableBody.appendChild(tr);
      return;
    }
    pendingTasks.forEach((task, index) => {
      const tr = document.createElement('tr');
      const tdTask = document.createElement('td');
      tdTask.textContent = task.task;
      const tdType = document.createElement('td');
      tdType.textContent = task.type;
      const tdDate = document.createElement('td');
      tdDate.textContent = task.date;
      const tdAction = document.createElement('td');
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.className = 'delete-btn';
      delBtn.onclick = () => {
        if(confirm('Are you sure you want to delete this task?')){
          pendingTasks.splice(index, 1);
          populatePendingTasks();
        }
      };
      tdAction.appendChild(delBtn);
      tr.appendChild(tdTask);
      tr.appendChild(tdType);
      tr.appendChild(tdDate);
      tr.appendChild(tdAction);
      pendingTasksTableBody.appendChild(tr);
    });
  }
  populatePendingTasks();

  // Populate Top Courses
  const topCoursesDiv = document.getElementById('topCourses');
  if(topCoursesDiv){
    topCoursesDiv.innerHTML = '';
    courses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.className = 'top-course-item';
      courseDiv.textContent = `${course.title} (${course.duration}) - Popularity: ${course.popularity}`;
      topCoursesDiv.appendChild(courseDiv);
    });
  }


  // Setup mini-searches with Enter and icon support
  function setupSearch(searchId, data, tableId, columns, type) {
    const searchInput = document.getElementById(searchId);
    const searchIcon = searchInput ? searchInput.parentElement.querySelector('i.fa-search') : null;
    if (searchInput) {
      const performSearch = function() {
        const term = searchInput.value.toLowerCase();
        const filtered = data.filter(item => 
          Object.values(item).some(val => val.toString().toLowerCase().includes(term))
        );
        populateTable(tableId, filtered, columns, null, type);
      };

      searchInput.addEventListener('input', performSearch);
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          performSearch();
        }
      });

      if (searchIcon) {
        searchIcon.style.cursor = 'pointer';
        searchIcon.style.pointerEvents = 'auto';
        searchIcon.addEventListener('click', performSearch);
      }
    }
  }

  setupSearch('studentSearch', students, 'studentTable', ['name','age','qualification','location','course','dateOfJoining','status'], 'student');
  setupSearch('trainerSearch', trainers, 'trainerTable', ['name','age','qualification','location','experience','course','dateOfJoining','status'], 'trainer');
  setupSearch('assignmentSearch', assignments, 'assignmentTable', ['title','course','due','status'], 'assignment');
  setupSearch('recordedSearch', recordedClasses, 'recordedTable', ['title','course','link'], 'recorded');
  setupSearch('liveSearch', liveClasses, 'liveTable', ['title','trainer','date','link'], 'live');

  // Global Search - filters all tables on dashboard
  const globalSearch = document.getElementById('globalSearch');
  const globalIcon = globalSearch ? globalSearch.parentElement.querySelector('i.fa-search') : null;
  if (globalSearch) {
    const performGlobalSearch = function() {
      const term = globalSearch.value.toLowerCase();
      if (term.length > 0) {
        // Filter each dataset
        const filteredStudents = students.filter(s =>
          Object.values(s).some(val => val.toString().toLowerCase().includes(term))
        );
        const filteredTrainers = trainers.filter(t =>
          Object.values(t).some(val => val.toString().toLowerCase().includes(term))
        );
        const filteredAssignments = assignments.filter(a => 
          a.title.toLowerCase().includes(term) || a.course.toLowerCase().includes(term) || a.due.toLowerCase().includes(term) || a.status.toLowerCase().includes(term)
        );
        const filteredRecorded = recordedClasses.filter(r => 
          r.title.toLowerCase().includes(term) || r.course.toLowerCase().includes(term)
        );
        const filteredLive = liveClasses.filter(l => 
          l.title.toLowerCase().includes(term) || l.trainer.toLowerCase().includes(term) || l.date.toLowerCase().includes(term)
        );

        // Update each table
        populateTable('studentTable', filteredStudents, ['name','age','qualification','location','course','dateOfJoining','status'], null, 'student');
        populateTable('trainerTable', filteredTrainers, ['name','age','qualification','location','experience','course','dateOfJoining','status'], null, 'trainer');
        populateTable('assignmentTable', filteredAssignments, ['title','course','due','status'], null, 'assignment');
        populateTable('recordedTable', filteredRecorded, ['title','course','link'], null, 'recorded');
        populateTable('liveTable', filteredLive, ['title','trainer','date','link'], null, 'live');

        // Check if all filtered are empty
        const totalMatches = filteredStudents.length + filteredTrainers.length + filteredAssignments.length + filteredRecorded.length + filteredLive.length;
        if (totalMatches === 0) {
          // Optionally show a global message, but since tables show "No data found", alert optional
          // alert(`No data found for "${term}"`);
        }
      } else {
        // Reset to full data if empty
        populateTable('studentTable', students, ['name','age','qualification','location','course','dateOfJoining','status'], updateStudentCount, 'student');
        populateTable('trainerTable', trainers, ['name','age','qualification','location','experience','course','dateOfJoining','status'], updateTrainerCount, 'trainer');
        populateTable('assignmentTable', assignments, ['title','course','due','status'], updateAssignmentCount, 'assignment');
        populateTable('recordedTable', recordedClasses, ['title','course','link'], updateVideoCount, 'recorded');
        populateTable('liveTable', liveClasses, ['title','trainer','date','link'], null, 'live');
      }
    };

    globalSearch.addEventListener('input', performGlobalSearch);
    globalSearch.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        performGlobalSearch();
      }
    });

    if (globalIcon) {
      globalIcon.style.cursor = 'pointer';
      globalIcon.style.pointerEvents = 'auto';
      globalIcon.addEventListener('click', performGlobalSearch);
    }
  }

  // Export functions
  window.exportStudents = function() {
    const csv = 'Name,Age,Qualification,Location,Course,Date of Joining,Status\n' +
      students.map(s => `${s.name},${s.age},${s.qualification},${s.location},${s.course},${s.dateOfJoining},${s.status}`).join('\n');
    downloadCSV(csv, 'students.csv');
  };

  window.exportTrainers = function() {
    const csv = 'Name,Age,Qualification,Location,Experience,Course,Date of Joining,Status\n' +
      trainers.map(t => `${t.name},${t.age},${t.qualification},${t.location},${t.experience},${t.course},${t.dateOfJoining},${t.status}`).join('\n');
    downloadCSV(csv, 'trainers.csv');
  };

  window.exportAssignments = function() {
    const csv = 'Title,Course,Due,Status\n' +
      assignments.map(a => `${a.title},${a.course},${a.due},${a.status}`).join('\n');
    downloadCSV(csv, 'assignments.csv');
  };

  window.exportRecordedClasses = function() {
    const csv = 'Title,Course,Link\n' +
      recordedClasses.map(r => `${r.title},${r.course},${r.link}`).join('\n');
    downloadCSV(csv, 'recorded_classes.csv');
  };

  window.exportLiveClasses = function() {
    const csv = 'Title,Trainer,Date,Link\n' +
      liveClasses.map(l => `${l.title},${l.trainer},${l.date},${l.link}`).join('\n');
    downloadCSV(csv, 'live_classes.csv');
  };

  window.exportMaterials = function() {
    const csv = 'Title,Link\n' +
      materials.map(m => `${m.title},${m.link}`).join('\n');
    downloadCSV(csv, 'materials.csv');
  };

  window.exportStudentsAttendance = function() {
    let csv = 'Date,Name,Status\n';
    const keys = Object.keys(localStorage);
    const attendanceKeys = keys.filter(key => key.startsWith('attendance_'));
    attendanceKeys.sort();
    attendanceKeys.forEach(key => {
      const date = key.replace('attendance_', '');
      const data = JSON.parse(localStorage.getItem(key));
      if (data.students) {
        Object.keys(data.students).forEach(name => {
          const status = data.students[name] ? 'Present' : 'Absent';
          csv += `${date},${name},${status}\n`;
        });
      }
    });
    downloadCSV(csv, 'student_attendance.csv');
  };

  window.exportTrainersAttendance = function() {
    let csv = 'Date,Name,Status\n';
    const keys = Object.keys(localStorage);
    const attendanceKeys = keys.filter(key => key.startsWith('attendance_'));
    attendanceKeys.sort();
    attendanceKeys.forEach(key => {
      const date = key.replace('attendance_', '');
      const data = JSON.parse(localStorage.getItem(key));
      if (data.trainers) {
        Object.keys(data.trainers).forEach(name => {
          const status = data.trainers[name] ? 'Present' : 'Absent';
          csv += `${date},${name},${status}\n`;
        });
      }
    });
    downloadCSV(csv, 'trainer_attendance.csv');
  };

  function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  // Combined export button toggle
  const combinedExportBtn = document.getElementById('combinedExportBtn');
  const exportOptions = document.getElementById('exportOptions');
  if (combinedExportBtn && exportOptions) {
    combinedExportBtn.addEventListener('click', () => {
      if (exportOptions.style.display === 'none' || exportOptions.style.display === '') {
        exportOptions.style.display = 'block';
      } else {
        exportOptions.style.display = 'none';
      }
    });
    // Close export options if clicked outside
    document.addEventListener('click', (e) => {
      if (!combinedExportBtn.contains(e.target) && !exportOptions.contains(e.target)) {
        exportOptions.style.display = 'none';
      }
    });
  }

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = '../login.html';
  });

  // Quick Action modals
  window.openAddModal = function(type){
    const modalId = `modal${type.charAt(0).toUpperCase()+type.slice(1)}`;
    document.getElementById(modalId).style.display='flex';
    // Reset inputs and set mode to add
    resetModalInputs(modalId);
    setModalTitle(modalId, 'Add', type);
    // Store current type for save
    window.currentModalType = type;
    window.currentEditIndex = null; // Not editing
  }
  window.closeModal = function(id){
    document.getElementById(id).style.display='none';
  }

  // Reset modal inputs
  function resetModalInputs(modalId){
    const modal = document.getElementById(modalId);
    if(modal){
      modal.querySelectorAll('input, select').forEach(input => input.value = '');
    }
  }

  // Set modal title
  function setModalTitle(modalId, action, type){
    const titleElem = document.getElementById(modalId).querySelector('h3');
    if(titleElem) titleElem.textContent = `${action} ${type.charAt(0).toUpperCase() + type.slice(1)}`;
  }

  // Populate modal for editing
  window.editRow = function(type, index){
    const modalId = `modal${type.charAt(0).toUpperCase()+type.slice(1)}`;
    document.getElementById(modalId).style.display='flex';
    setModalTitle(modalId, 'Edit', type);
    window.currentModalType = type;
    window.currentEditIndex = index;
    // Populate inputs based on type
    if(type === 'student' && students[index]){
      document.getElementById('m_studentName').value = students[index].name;
      document.getElementById('m_studentAge').value = students[index].age;
      document.getElementById('m_studentQualification').value = students[index].qualification;
      document.getElementById('m_studentLocation').value = students[index].location;
      document.getElementById('m_studentCourse').value = students[index].course;
      document.getElementById('m_studentDateOfJoining').value = students[index].dateOfJoining;
      document.getElementById('m_studentStatus').value = students[index].status;
    } else if(type === 'trainer' && trainers[index]){
      document.getElementById('m_trainerName').value = trainers[index].name;
      document.getElementById('m_trainerAge').value = trainers[index].age;
      document.getElementById('m_trainerQualification').value = trainers[index].qualification;
      document.getElementById('m_trainerLocation').value = trainers[index].location;
      document.getElementById('m_trainerExperience').value = trainers[index].experience;
      document.getElementById('m_trainerCourse').value = trainers[index].course;
      document.getElementById('m_trainerDateOfJoining').value = trainers[index].dateOfJoining;
      document.getElementById('m_trainerStatus').value = trainers[index].status;
    } // Add similar for other types if needed
  }

  // Save functionality
  function addSaveListener(buttonId, type, fields, dataArray, updateCount){
    document.getElementById(buttonId).addEventListener('click', () => {
      const inputs = {};
      fields.forEach(field => {
        inputs[field.replace(/^m_/, '')] = document.getElementById(`m_${field}`).value;
      });
      if(window.currentEditIndex !== null){
        // Edit mode
        dataArray[window.currentEditIndex] = inputs;
      } else {
        // Add mode
        dataArray.push(inputs);
      }
      // Update table and counts
      populateTable(`${type}Table`, dataArray, fields.map(f => f.replace(/^m_/, '').replace(/([A-Z])/g, '_$1').toLowerCase()), updateCount);
      closeModal(`modal${type.charAt(0).toUpperCase()+type.slice(1)}`);
      window.currentEditIndex = null;
    });
  }

  // Add save listeners for each modal
  addSaveListener('modalStudentSave', 'student', ['studentName', 'studentAge', 'studentQualification', 'studentLocation', 'studentCourse', 'studentStatus'], students, updateStudentCount);
  addSaveListener('modalTrainerSave', 'trainer', ['trainerName', 'trainerAge', 'trainerQualification', 'trainerLocation', 'trainerExperience', 'trainerCourse', 'trainerStatus'], trainers, updateTrainerCount);
  addSaveListener('modalAssignmentSave', 'assignment', ['assignmentTitle', 'assignmentCourse', 'assignmentDue', 'assignmentStatus'], assignments, updateAssignmentCount);
  // Add for other modals as needed

  // Add save listener for recorded classes modal
  document.getElementById('modalRecordedSave').addEventListener('click', () => {
    const title = document.getElementById('m_recordedTitle').value.trim();
    const course = document.getElementById('m_recordedCourse').value.trim();
    const link = document.getElementById('m_recordedLink').value.trim();
    if (title && course && link) {
      recordedClasses.push({ title, course, link });
      populateTable('recordedTable', recordedClasses, ['title', 'course', 'link'], updateVideoCount, 'recorded');
      closeModal('modalRecorded');
      document.getElementById('m_recordedTitle').value = '';
      document.getElementById('m_recordedCourse').value = '';
      document.getElementById('m_recordedLink').value = '';
      alert('Recorded class added successfully!');
    } else {
      alert('Please fill all fields.');
    }
  });

  // Add save listener for holiday modal (fix missing save functionality)
  document.getElementById('modalHolidaySave').addEventListener('click', () => {
    const name = document.getElementById('m_holidayName').value.trim();
    const date = document.getElementById('m_holidayDate').value.trim();
    if (name && date) {
      holidays.push({ name, date });
      const holidaysList = document.getElementById('holidaysList');
      if (holidaysList) {
        const li = document.createElement('li');
        li.textContent = `${name} - ${date}`;
        holidaysList.appendChild(li);
      }
      closeModal('modalHoliday');
      document.getElementById('m_holidayName').value = '';
      document.getElementById('m_holidayDate').value = '';
      alert('Holiday added successfully!');
    } else {
      alert('Please fill all fields.');
    }
  });

  // Profile modal
  window.openProfileModal = function() { alert('Profile modal not implemented yet.'); };

  // Individual Attendance Modal
  window.viewIndividualAttendance = function(personName, type) {
    const modal = document.getElementById('modalIndividualAttendance');
    const title = document.getElementById('individualAttendanceTitle');
    const monthInput = document.getElementById('attendanceMonth');
    const tbody = document.getElementById('individualAttendanceBody');

    title.textContent = `Monthly Attendance for ${personName}`;

    // Set to current month
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    monthInput.value = `${year}-${month}`;

    function loadMonthlyAttendance() {
      const [year, month] = monthInput.value.split('-');
      const daysInMonth = new Date(year, month, 0).getDate();
      tbody.innerHTML = '';

      for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${month.padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const attendanceKey = `attendance_${dateStr}`;
        const savedData = localStorage.getItem(attendanceKey);
        let status = 'No Record';
        if (savedData) {
          const attendanceData = JSON.parse(savedData);
          const personAttendance = attendanceData[type + 's'][personName];
          if (personAttendance === true) {
            status = 'Present';
          } else if (personAttendance === false) {
            status = 'Absent';
          }
        }

        const tr = document.createElement('tr');
        const tdDate = document.createElement('td');
        tdDate.textContent = dateStr;
        const tdStatus = document.createElement('td');
        const statusSpan = document.createElement('span');
        statusSpan.className = `status ${status.toLowerCase().replace(' ', '')}`;
        statusSpan.textContent = status;
        tdStatus.appendChild(statusSpan);
        tr.appendChild(tdDate);
        tr.appendChild(tdStatus);
        tbody.appendChild(tr);
      }
    }

    monthInput.addEventListener('change', loadMonthlyAttendance);
    loadMonthlyAttendance();
    modal.style.display = 'flex';
  };

  // Handle assignments page specific code
  if (document.querySelector('#assignmentTable tbody')) {
    console.log("Populating assignments table");
    populateTable('assignmentTable', assignments, ['title','course','due','status'], null, 'assignment');
    setupSearch('assignmentSearch', assignments, 'assignmentTable', ['title','course','due','status'], 'assignment');
  }
});
