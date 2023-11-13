"use strict";
// // TODO: Uncomment next line and get the main header element by id
// const mainHeader = document.querySelector('#main-header');
// const button1 = document.querySelector('.btn1')
// // TODO: Set inner html of mainHeader to "JavaScript is Cool"
// 	button1.addEventListener('click',() => {
// 		mainHeader.innerHTML = 'javascript is cool'
// 	})
// // TODO: Uncomment the next line and get the sub header element by id
// const subHeader = document.querySelector('#sub-header');
// const button2 = document.querySelector('.btn2')
//
// // TODO: Set the text color of subHeader to blue
// button2.addEventListener('click',() => {
// 	subHeader.style.color = 'blue'
// })
// // TODO: Uncomment the next line and get all list items
// const listItems = document.querySelectorAll('li');
// const button3 = document.querySelector('.btn3')
//
// // TODO: Set text color on every other list item to grey
// // TODO: Set text color of li with dbid = 1 to blue
// button3.addEventListener('click',() => {
// 	for(const listItem of listItems) {
// 		listItems[1].style.color = 'grey'
// 		listItems[3].style.color = 'grey'
// 		listItems[0].style.color = 'blue'
// 	}
// })
// // TODO: Uncomment the next line and get all elements with class name sub-paragraph
// const subParagraphs = document.querySelectorAll('.sub-paragraph');
// const button4 = document.querySelector('.btn4')
//
// // TODO: Change the text in the first sub paragraph to "Mission Accomplished!"
// button4.addEventListener('click',() => {
// 	for (const subParagraph of subParagraphs) {
// 		subParagraph.innerText = 'Mission Accomplished'
// 	}
// })


const blueHeader = document.querySelector('h1')

blueHeader.addEventListener('click',()=>{
	blueHeader.style.backgroundColor = 'blue'
})
const fontChanger = document.querySelector('p')

fontChanger.addEventListener('dblclick',()=>{
	fontChanger.style.fontSize = '18px'
})


// const listItem = document.querySelector('ul')
//
// listItem.addEventListener('mouseenter',() => {
// 		listItem.style.color = 'red'
// })
//
// listItem.addEventListener('mouseleave',() => {
// 	listItem.style.color = 'black'
// })


const listItem = document.querySelectorAll('li')

listItem.addEventListener('mouseenter',() => {
	for (const listItem of listItems){
		listItem.style.color = 'red'

	}
})