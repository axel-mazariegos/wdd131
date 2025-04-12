// 5. In your blank js file, declare three(3) variables 
// that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Function to get the chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

const chaptersArray = getChapterList() || [];

// Function to update localStorage with the chaptersArray
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

// Function to remove a chapter from the array and localStorage
function deleteChapter(chapter) {
    // Find the index of the chapter in the array
    const index = chaptersArray.indexOf(chapter);
    if (index > -1) {
        // Remove the chapter from the array
        chaptersArray.splice(index, 1);
        // Update localStorage with the new array
        setChapterList();
    }
}

// Function to display a chapter in the list
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');

    // Create a span for the chapter text
    let chapterText = document.createElement('span');
    chapterText.textContent = item;

    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');

    // Append the chapter text first, then the delete button
    li.append(chapterText);
    li.append(deletebutton);

    list.append(li);

    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(chapterText.textContent); // Pass only the chapter text
        input.focus();
    });

    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

// Populate the list with chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Handling DOM Events

// 2. Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});
