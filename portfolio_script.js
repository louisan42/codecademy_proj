// Random vacation lottery
// Author: Louis Amoah-Nuamah

const randomChoice = (n) => {
    return Math.floor(Math.random() * n + 2)
};
// uncomment code below to test random pick
//console.log(randomChoice());

let destinationArr = [{continent:'Africa',cities:['Accra','Cairo','Johannesburg']}, {continent:'Europe',cities:['London','Berlin','Athens']}, 
{continent:'North America',cities:['Miami','Vancouver','Cancun']}, {continent:'South America',cities:['Quito','Bogota','Rio de Janeiro']}, 
{continent:'Asia',cities:['Bali','Tokyo','Shanghai']}, {continent:'Oceania',cities:['Sydney','Queenstown','Vanua Levu']}];

const outputs = {
    travelPackagee: ['couple\'s', 'Group of 4', 'Single nightlife' ],
    destination: [],
    set destinations(destinationArr) {
        this.destination = destinationArr;
    },
    lengthOfStay : ['2 weeks', '3 weeks', '4 weeks']

}

let finalOutput = [];
outputs.destinations = destinationArr;
const flocationValue = (objArr) => {
  let spinNumber = randomChoice(objArr.length);
  return objArr[spinNumber];
  
};
let desObj = outputs.destination;
let continentObj = flocationValue(desObj);

let city = "";
let continentIndex = outputs.destination.indexOf(continentObj);
let cityObj = continentObj.cities

switch(continentObj.continent != undefined && continentObj.continent){
    case 'Africa':
        {
            city = flocationValue(cityObj)
            console.log(city);
            break;
        }
    case 'Europe':
        {
            city = flocationValue(cityObj)
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    case 'North America':
        {
            city = flocationValue(cityObj)
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    case 'South America':
        {
            city = flocationValue(cityObj)
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    case 'Asia':
        {
            city = flocationValue(cityObj)
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    case 'Oceania':
        {
            city = flocationValue(cityObj)
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    default : 
       console.log('Sorry try again later!');
}