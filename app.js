const form = document.querySelector('.input-form');
const workList = document.querySelector('.form-control');
const un_list = document.querySelector('ul.list-group');
const clearTaskAll = document.querySelector('#clearTaskall');
const lis = document.querySelectorAll('li');
/*
const filter = document.querySelector('.filter');
*/

loadEventListeners();
function loadEventListeners() {
  // add Task
  form.addEventListener('submit', addTask);
  // remove Task
  un_list.addEventListener('click', removeTask);
  //remove all Task
  clearTaskAll.addEventListener('click', taskRemove);
/*
  //filter taskRemove
  filter.addEventListener('keyup', filterTask);
*/
}



function addTask(e) {
  if (workList.value != '') {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent= workList.value;


    const a = document.createElement('a');
    a.className='llll';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fa fa-remove"></i>';

    un_list.appendChild(li);
    li.appendChild(a);
    workList.value = '';
  }
  else {
    alert('Please insert task to Add');
  }
  e.preventDefault();
}


function removeTask(e) {
  if (e.target.parentElement.classList.contains('llll')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}


function taskRemove(e) {
  if (confirm('Do You Want delete all Task?')) {
    un_list.innerHTML = '';
  }
}
/*
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.llll').forEach(function (task) {
    console.log(task);
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text != -1)) {
      task.style.display = 'block';
    }
    else {
      task.style.display = 'none';
    }
  });
}
*/
