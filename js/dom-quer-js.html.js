"use strict";
// TODO: Uncomment next line and get the main header element by id
const mainHeader = document.querySelector('#main-header');

// TODO: Set inner html of mainHeader to "JavaScript is Cool"
mainHeader.innerHTML = 'javascript is cool'
// TODO: Uncomment the next line and get the sub header element by id
const subHeader = document.querySelector('#sub-header');

// TODO: Set the text color of subHeader to blue
subHeader.style.color = 'blue'
// TODO: Uncomment the next line and get all list items
const listItems = document.querySelectorAll('li');

// TODO: Set text color on every other list item to grey
// TODO: Set text color of li with dbid = 1 to blue
 for(const listItem of listItems) {
	 listItems[1].style.color = 'grey'
	 listItems[3].style.color = 'grey'
	 listItems[0].style.color = 'blue'
 }
// TODO: Uncomment the next line and get all elements with class name sub-paragraph
const subParagraphs = document.querySelectorAll('.sub-paragraph');

// TODO: Change the text in the first sub paragraph to "Mission Accomplished!"
for(const subParagraph of subParagraphs){
	subParagraph.innerText = 'Mission Accomplished'
}