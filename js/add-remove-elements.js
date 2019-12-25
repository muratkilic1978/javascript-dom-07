//1. Access the parent element using the method getElementsByTagName and save it as a variable named "list."
let list = document.getElementsByTagName('ul')[0];

//2. Create a new item using the method createElement and save it as a variable named "newItem."
newListItem = document.createElement('li');

//3. Create some text to place in that new element.
newText = document.createTextNode('South America');

//4. Then we'll append this new text to our new Item! 
newListItem.appendChild(newText);

//5. Finally, we'll use appendChild again, this time to add the new Item to the global list variable
list.appendChild(newListItem);


newListItem = document.createElement('li');
newText = document.createTextNode('Antarctica');
newListItem.appendChild(newText);

list.appendChild(newListItem);

newListItem = document.createElement('li');
newText = document.createTextNode('Europe');
newListItem.appendChild(newText);

list.appendChild(newListItem);

newListItem = document.createElement('li');
newText = document.createTextNode('Australia');
newListItem.appendChild(newText);

list.appendChild(newListItem);

//Removing elements from DOM

//1. Grab the list item "Three", identifying it as the third <li> element on the page.
let removeMe2 = document.getElementsByTagName('li')[2];


//2. Finally, we will use the removeChild method to remove our selected value
list.removeChild(removeMe2);


let removeMe3= document.getElementsByTagName('li')[3];
list.removeChild(removeMe3);


let removeMe4 = document.getElementsByTagName('li')[4];
list.removeChild(removeMe4);
