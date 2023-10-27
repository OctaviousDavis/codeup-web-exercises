function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
const createPairs = (arr) => {
    while(arr.length > 0){
    let studentPairs = [];
    let pair = [];
    let student1 = arr.pop();
        if(arr.length === 0){
            studentPairs[studentPairs.length - 1].push(students)
        } else {
            pair.push(student1);
            let student2 = arr.pop();
            pair.push(stud)
        }
    }
}


const students = [
    "Amando",
    "Blanca",
    "Cameron",
    "Chris",
    "Dany",
    "David",
    "Diana",
    "Drew",
    "Evan",
    "Hassan",
    "Jack",
    "Jason",
    "John",
    "Johnathan",
    "Jordan",
    "Joshua",
    "Katie",
    "Luis",
]
console.log(createPairs(students))