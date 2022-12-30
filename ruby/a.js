const generateButton = document.querySelector('#My-button');
const numberList = document.querySelector('#number-list');

generateButton.addEventListener('click', () => {
  // Generate a random number between 1 and 9
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  // Create a new list item with the random number
  const listItem = document.createElement('li');
  listItem.textContent = randomNumber;
  // Add the list item to the number list
  numberList.appendChild(listItem);
});