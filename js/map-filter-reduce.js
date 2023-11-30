const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];


const userWith3 = users.filter((user) => {
	return user.languages.length > 2;
});
console.log(userWith3)

const userEmail = users.map (userEmail => {
	return userEmail.email;
})
console.log(userEmail)

const totalYears = users.reduce((accumulator,user) => {
	return accumulator + user.yearsOfExperience;
},0)
const averageYears = totalYears / users.length;
console.log(averageYears)
console.log(totalYears)

const longestEmail = users.reduce((accumulator,user) => {
	if(accumulator.length < user.email.length){
		return accumulator = user.email;
	}else{
		return accumulator;
	}
},"")

console.log(longestEmail)

const userNames = users.reduce((accumulator, user, index) =>{
		return accumulator + ' ,' + user.name;
},"")
console.log(userNames)