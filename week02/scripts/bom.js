// 5. In your blank js file, declare three(3) variables 
// that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

// 6. Create a li element that will hold each entry's chapter title 
// and an associated delete button.
const li = document.createElement('li');

// 7. Create a delete button.
const deleteButton = document.createElement('button');

// 8. Populate the li element variable's textContent or innerHTML with the input value.
li.textContent = input.value;

// 9. Populate the button textContent with a ❌.
deleteButton.textContent = '❌';

// 10. Append the li element variable with the delete button.
li.append(deleteButton);

// 11. Append the li element variable to the unordered list in your HTML.
list.append(li);