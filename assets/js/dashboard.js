document.addEventListener('DOMContentLoaded', () => {
  // Sample Data
  let students = [
    { name:'John Doe', course:'Mathematics', status:'Active' },
    { name:'Jane Smith', course:'Biology', status:'Active' },
    { name:'Mark Lee', course:'Physics', status:'Absent' },
    { name:'Emily Davis', course:'Chemistry', status:'Active' },
    { name:'Alice Johnson', course:'Mathematics', status:'Active' },
    { name:'Bob Wilson', course:'Biology', status:'Absent' },
    { name:'Charlie Brown', course:'Physics', status:'Active' },
    { name:'Diana Prince', course:'Chemistry', status:'Active' }
  ];

  let trainers = [
    { name:'Mr. Alex', course:'Physics', status:'Active' },
    { name:'Ms. Emma', course:'Chemistry', status:'On Leave' },
    { name:'Dr. Smith', course:'Mathematics', status:'Active' },
    { name:'Prof. Johnson', course:'Biology', status:'Active' },
    { name:'Mr. Lee', course:'Physics', status:'Absent' }
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
    { title:'Math Live Session', trainer:'Mr. Alex', date:'2025-09-21', link:'#' },
    { title:'Physics Discussion', trainer:'Dr. Smith', date:'2025-09-23', link:'#' },
    { title:'Chemistry Lab', trainer:'Ms. Emma', date:'2025-09-25', link:'#' },
    { title:'Biology Review', trainer:'Prof. Johnson', date:'2025-09-27', link:'#' }
  ];

  let recordedClasses = [
    { title:'Chemistry Recorded', course:'Chemistry Intro', link:'#' },
    { title:'Math Basics Video', course:'Math Basics', link:'#' },
    { title:'Physics Lecture', course:'Physics Advanced', link:'#' },
    { title:'Biology Session', course:'Biology Fundamentals', link:'#' },
    { title:'CS Workshop', course:'Computer Science', link:'#' }
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

  let recentActivities = [
    'Student John Doe enrolled in Math Basics - 2 hours ago',
    'Assignment "Physics Lab" submitted by Jane Smith - 1 day ago',
    'New course "Advanced Chemistry" added - 3 days ago',
    'Trainer Ms. Emma marked attendance for Biology class - 5 days ago',
    'Holiday "Independence Day" scheduled - 1 week ago'
  ];

  // Populate Counts
  document.getElementById('studentCount').textContent = students.length;
  document.getElementById('trainerCount').textContent = trainers.length;
  document.getElementById('courseCount').textContent = courses.length;
  document.getElementById('assignmentCount').textContent = assignments.length;
  document.getElementById('materialCount').textContent = materials.length;
  document.getElementById('videoCount').textContent = recordedClasses.length;

  // Populate Tables
  function populateTable(id, data, columns, updateCount, type) {
    const tbody = document.querySelector(`#${id} tbody`);
    tbody.innerHTML = '';
    if (data.length === 0) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.colSpan = columns.length + 1; // +1 for actions column
      td.style.textAlign = 'center';
      td.style.color = 'rgba(255,255,255,0.6)';
      td.textContent = 'No data found';
      tbody.appendChild(tr);
      return;
    }
    data.forEach((item, index) => {
      const tr = document.createElement('tr');
      columns.forEach(col => {
        const td = document.createElement('td');
        if (col === 'link' && type === 'recorded') {
          td.innerHTML = `<a href="${item[col]}" target="_blank">Watch</a>`;
        } else if (col === 'link' && type === 'live') {
          td.innerHTML = `<a href="${item[col]}" target="_blank">Join</a>`;
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

  populateTable('studentTable', students, ['name','course','status'], updateStudentCount, 'student');
  populateTable('trainerTable', trainers, ['name','course','status'], updateTrainerCount, 'trainer');
  populateTable('assignmentTable', assignments, ['title','course','due','status'], updateAssignmentCount, 'assignment');
  populateTable('recordedTable', recordedClasses, ['title','course','link'], updateVideoCount, 'recorded');
  populateTable('liveTable', liveClasses, ['title','trainer','date','link'], null, 'live');

  // Populate recent activities
  const activityList = document.getElementById('activityList');
  recentActivities.forEach(a => {
    const li = document.createElement('li');
    li.textContent = a;
    activityList.appendChild(li);
  });

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

  setupSearch('studentSearch', students, 'studentTable', ['name','course','status'], 'student');
  setupSearch('trainerSearch', trainers, 'trainerTable', ['name','course','status'], 'trainer');
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
          s.name.toLowerCase().includes(term) || s.course.toLowerCase().includes(term) || s.status.toLowerCase().includes(term)
        );
        const filteredTrainers = trainers.filter(t => 
          t.name.toLowerCase().includes(term) || t.course.toLowerCase().includes(term) || t.status.toLowerCase().includes(term)
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
        populateTable('studentTable', filteredStudents, ['name','course','status'], null, 'student');
        populateTable('trainerTable', filteredTrainers, ['name','course','status'], null, 'trainer');
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
        populateTable('studentTable', students, ['name','course','status'], updateStudentCount, 'student');
        populateTable('trainerTable', trainers, ['name','course','status'], updateTrainerCount, 'trainer');
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

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', ()=>alert('Logout clicked!'));

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
      document.getElementById('m_studentCourse').value = students[index].course;
      document.getElementById('m_studentStatus').value = students[index].status;
    } else if(type === 'trainer' && trainers[index]){
      document.getElementById('m_trainerName').value = trainers[index].name;
      document.getElementById('m_trainerCourse').value = trainers[index].course;
      document.getElementById('m_trainerStatus').value = trainers[index].status;
    } // Add similar for other types if needed
  }

  // Save functionality
  function addSaveListener(buttonId, type, fields, dataArray, updateCount){
    document.getElementById(buttonId).addEventListener('click', () => {
      const inputs = {};
      fields.forEach(field => {
        inputs[field] = document.getElementById(`m_${field}`).value;
      });
      if(window.currentEditIndex !== null){
        // Edit mode
        dataArray[window.currentEditIndex] = inputs;
      } else {
        // Add mode
        dataArray.push(inputs);
      }
      // Update table and counts
      populateTable(`${type}Table`, dataArray, Object.keys(inputs), updateCount);
      closeModal(`modal${type.charAt(0).toUpperCase()+type.slice(1)}`);
      window.currentEditIndex = null;
    });
  }

  // Add save listeners for each modal
  addSaveListener('modalStudentSave', 'student', ['studentName', 'studentCourse', 'studentStatus'], students, updateStudentCount);
  addSaveListener('modalTrainerSave', 'trainer', ['trainerName', 'trainerCourse', 'trainerStatus'], trainers, updateTrainerCount);
  // Add for other modals as needed
});
