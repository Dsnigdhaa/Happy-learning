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

  // Populate Counts
  document.getElementById('studentCount').textContent = students.length;
  document.getElementById('trainerCount').textContent = trainers.length;
  document.getElementById('courseCount').textContent = courses.length;
  document.getElementById('assignmentCount').textContent = assignments.length;
  document.getElementById('materialCount').textContent = materials.length;
  document.getElementById('videoCount').textContent = recordedClasses.length;

  // Populate Tables
  function populateTable(id, data, columns, updateCount){
    const tbody = document.querySelector(`#${id} tbody`);
    tbody.innerHTML = '';
    data.forEach((item, index) => {
      const tr = document.createElement('tr');
      columns.forEach(col => {
        const td = document.createElement('td');
        td.textContent = item[col];
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
      delBtn.onclick = ()=>{
        data.splice(index, 1);
        tr.remove();
        if(updateCount) updateCount();
      };
      actionTd.appendChild(delBtn);
      tr.appendChild(actionTd);
      tbody.appendChild(tr);
    });
  }

  function updateStudentCount(){ document.getElementById('studentCount').textContent = students.length; }
  function updateTrainerCount(){ document.getElementById('trainerCount').textContent = trainers.length; }
  function updateCourseCount(){ document.getElementById('courseCount').textContent = courses.length; }
  function updateAssignmentCount(){ document.getElementById('assignmentCount').textContent = assignments.length; }
  function updateMaterialCount(){ document.getElementById('materialCount').textContent = materials.length; }
  function updateVideoCount(){ document.getElementById('videoCount').textContent = recordedClasses.length; }

  populateTable('studentTable', students, ['name','course','status'], updateStudentCount);
  populateTable('trainerTable', trainers, ['name','course','status'], updateTrainerCount);
  populateTable('assignmentTable', assignments, ['title','course','due','status'], updateAssignmentCount);
  populateTable('recordedTable', recordedClasses, ['title','course','link'], updateVideoCount);
  populateTable('liveTable', liveClasses, ['title','trainer','date']);

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
