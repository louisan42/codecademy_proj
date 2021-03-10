// Random vacation lottery
// Author: Louis Amoah-Nuamah



const randomChoice = (n) => {
    return Math.floor(Math.random() * n)
};
// uncomment code below to test random pick
//console.log(randomChoice());

let destinationArr = [{continent:'Africa',cities:['Accra','Cairo','Johannesburg']}, {continent:'Europe',cities:['London','Berlin','Athens']}, 
{continent:'North America',cities:['Miami','Vancouver','Cancun']}, {continent:'South America',cities:['Quito','Bogota','Rio de Janeiro']}, 
{continent:'Asia',cities:['Bali','Tokyo','Shanghai']}, {continent:'Oceania',cities:['Sydney','Queenstown','Vanua Levu']}];

const outputs = {
    travelPackage: ['couple\'s', 'Group of 4', 'Single\'s nightlife' ],
    destination: [],
    set destinations(destinationArr) {
        this.destination = destinationArr;
    },
    lengthOfStay : ['2 weeks', '3 weeks', '4 weeks']

}


let finalOutput = [];
outputs.destinations = destinationArr;
// set posibility of not winning by expanding number of choice greater than lenght of array
// makes function resuable to access city array within destination objects
const flocationValue = (objArr, extraLength) => {
  let spinNumber = randomChoice(objArr.length + extraLength);
  return objArr[spinNumber];
  
};

let desObj = outputs.destination;
let continentObj = flocationValue(desObj, 4);
let continent = "";
let cityObj = "";
let city = "";

if(continentObj === undefined ){
    continent = 'error';
    finalOutput.push('Oops!')

}else{
    continent = continentObj.continent;
    cityObj = continentObj.cities;
    finalOutput.push('congratulations!!!')
};
// randomly pick travel packages and length of stay
let package = flocationValue(outputs.travelPackage, 0);
let lengthOfStay = flocationValue(outputs.lengthOfStay, 0);
// switch based on continent to randomly select city 
switch(continent){
    case 'Africa':
        {           
            city = flocationValue(cityObj, 0);
            break;
        }
    case 'Europe':
        {
            city = flocationValue(cityObj,0);
            break;
        }
    case 'North America':
        {
            city = flocationValue(cityObj,0);
            break;
        }
    case 'South America':
        {
            city = flocationValue(cityObj,0);
            break;
        }
    case 'Asia':
        {
            city = flocationValue(cityObj,0);
            break;
        }
    case 'Oceania':
        {
            city = flocationValue(cityObj,0);
            break;
        }
    default : 
       finalOutput.push('Better luck next time!');
};
// if condition is unflagged, push to message array
if (continent != 'error') {
    finalOutput.push(`You have won a trip to ${city} in ${continent}. `)
    finalOutput.push(`Package for ${package}. `)
    finalOutput.push(`You will spend ${lengthOfStay} in this destination.`)
}
const lotteryOutcome = finalOutput.join('\n');
console.log(lotteryOutcome);