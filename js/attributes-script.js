const profilePic = document.querySelector('#profile-pic')
setTimeout(()=>{
	profilePic.setAttribute('src','./img/codeup-logo-svg.svg');
},2000)

const profileName = document.querySelector('#profile-name')
setTimeout(()=>{
	profileName.innerHTML = 'Octavious Davis';
},4000)

const profileDesc = document.querySelector('#profile-desc')

setTimeout(()=>{
	profileDesc.classList.add('red')
	profileDesc.classList.add('font')
},6000)

const profileCard = document.querySelector('#profile-card')
setInterval(()=>{
	profileCard.classList.toggle('yep')
},2000)