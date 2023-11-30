const makeYellows = document.querySelectorAll('#park')
const button = document.querySelector('#yellow')

button.addEventListener('click',(e) => {
	for(let makeYellow of makeYellows) {
		makeYellows[0].lastElementChild.style.backgroundColor = 'yellow'
		makeYellows[1].lastElementChild.style.backgroundColor = 'yellow'
		makeYellows[2].lastElementChild.style.backgroundColor = 'yellow'
	}
})

const makeBolds = document.querySelectorAll('#bold')

for(let makeBold of makeBolds){
	makeBolds[0].addEventListener('click', (e) => {
	makeBolds[0].nextElementSibling.style.fontWeight = 'bold'
	})
	makeBolds[1].addEventListener('click', (e) => {
		makeBolds[1].nextElementSibling.style.fontWeight = 'bold'
	})
	makeBolds[2].addEventListener('click', (e) => {
		makeBolds[2].nextElementSibling.style.fontWeight = 'bold'
	})
}



for(let makeYellow of makeYellows){
	makeYellows[0].addEventListener('click', (e) => {
		makeYellows[0].firstElementChild.style.color = 'blue'
	})
	makeYellows[1].addEventListener('click', (e) => {
		makeYellows[1].firstElementChild.style.color = 'blue'
	})
	makeYellows[2].addEventListener('click', (e) => {
		makeYellows[2].firstElementChild.style.color = 'blue'
	})
}