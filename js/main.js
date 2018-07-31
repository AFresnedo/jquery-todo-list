//
// Manage ToDo List
//
// get button
var btn = $('#sticky');
console.log(btn, ' is the button');

//
// TODO delete task
//
// get delete button
// add event listener to delete button

//
// add list item
//

// append content (li ele)
function addToList() {
  // get list element
  var list = $('#list');
  console.log('begin append()');
  // get item contents
  var content = $('#input').val();
  console.log(content, ' is the input');
  // create list item
  var newDiv = $('<li></li>');
  newDiv.text(content);
  // append list item
  list.append(newDiv);
}

// give new li a delete button
function addDel() {
  // create button
  newDel = $('<button></button>');
}

// create a new task in the list
function createTask() {
  addToList();
  addDel();
}

//
// add event listener to make task button
//
btn.on("click", function(e){
  e.preventDefault();
  createTask();
});
