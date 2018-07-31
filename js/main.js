//
// Manage ToDo List
//
// get button
var btn = $('#sticky');
console.log(btn, ' is the button');

// grab task and delete all its children along with it
function delTask() {
  console.log('delete task detected');
}

//
// add list item
//

// append content
function addTextToCon(container) {
  console.log('begin addTextToCon()');
  // get user input from form input
  var content = $('#input').val();
  console.log(content, ' is the input');
  // create con item
  var newDiv = $('<div></div>');
  newDiv.text(content);
  // append con item
  container.append(newDiv);
}

// append del button to container
function addDel(container) {
  console.log('begin addDel()');
  // create button
  newDel = $('<button></button>');
  // TODO give button text
  // add event listener
  newDel.on('click', delTask)
  // append
  container.append(newDel);
}

// create a new task in the list
function createTask() {
  console.log('begin createTask()');
  // create container for task
  var taskCon = $('<div></div>');
  // append task container to todo list container
  list.append(taskCon);
  // add task content to task container
  addTextToCon(taskCon);
  // add del button to task container
  addDel(taskCon);
}

//
// add event listener to make task button
//
btn.on("click", function(e){
  // prevent default behavior to avoid page refresh
  e.preventDefault();
  // process user input for new task
  createTask();
});
