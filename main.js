//Задание 1

let cityname = "Lviv"
console.log(cityname)
let country = "Ukraine"
console.log(country)
let population = "800000"
console.log(population)
let variable = true;
console.log(variable)

//Задание 2

let height = 40
let width = 70

let result = height * width;
console.log(result)

//Задание 3

let time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;
let result2 = speedOfFirst + speedOfSecond;
console.log(result2)
let result3 = result2 * time;
console.log(result3)

//Задание 4

const randomNumber = Math.floor(Math.random() * 100);
if(randomNumber<20) {
    console.log("randomNumber>20")
} else if (randomNumber>50) {
    console.log("randomNumber>50")
} else {
    console.log("randomNumber<20, и randomNumber>50")
}

//Задание 5

const randomNumber1 = Math.floor(Math.random() * 100);
switch(randomNumber1) {
    case "randomNumber<20" :
        comsole.log("randomNumber>20");
        break
        case "randomNumber>50" :
            console.log("randomNumber>50");
            break
            default :
            console.log("randomNumber<20, и randomNumber>50");
}