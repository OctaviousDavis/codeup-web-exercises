import {NETFLIX_TITLES} from "../data/netflix-titles.js";


(()=> {
	// const scifiTitles = []
	// for (let title of NETFLIX_TITLES){
	// 	if (title.listed_in.includes('Sci -Fi')){
	// 		scifiTitles.push(title)
	// 	}
	// }
	// console.log(scifiTitles)

	const scifiTitles = NETFLIX_TITLES.filter((title) => {
		return title.listed_in.includes('Sci-fi')
	});
})();