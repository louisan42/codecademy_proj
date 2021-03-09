// Random vacation lottery
// Author: Louis Amoah-Nuamah



const randomChoice = (n, addMe) => {
    return Math.floor(Math.random() * n)
};
// uncomment code below to test random pick
//console.log(randomChoice());

let destinationArr = [{continent:'Africa',cities:['Accra','Cairo','Johannesburg']}, {continent:'Europe',cities:['London','Berlin','Athens']}, 
{continent:'North America',cities:['Miami','Vancouver','Cancun']}, {continent:'South America',cities:['Quito','Bogota','Rio de Janeiro']}, 
{continent:'Asia',cities:['Bali','Tokyo','Shanghai']}, {continent:'Oceania',cities:['Sydney','Queenstown','Vanua Levu']}];

const outputs = {
    travelPackagee: ['couple\'s', 'Group of 4', 'Single\'s nightlife' ],
    destination: [],
    set destinations(destinationArr) {
        this.destination = destinationArr;
    },
    lengthOfStay : ['2 weeks', '3 weeks', '4 weeks']

}

let finalOutput = [];
outputs.destinations = destinationArr;
// set posibily of not winning by expanding number of choice greater than the lenght of array
// makes function resuable to access city array within destination objects
const flocationValue = (objArr, extraLength) => {
  let spinNumber = randomChoice(objArr.length + extraLength);
  return objArr[spinNumber];
  
};
let desObj = outputs.destination;
let continentObj = flocationValue(desObj, 4);
let continent = "";
let cityObj = "";

if(continentObj === undefined ){
    continent = 'error';
    finalOutput.push('Oops!')

}else{
    continent = continentObj.continent;
    cityObj = continentObj.cities;
    finalOutput.push('congratulations!!!')

}
let continentIndex = outputs.destination.indexOf(continentObj);

switch(continent){
    case 'Africa':
        {
            
            
            let city = flocationValue(cityObj, 0);
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    case 'Europe':
        {
            
            let city = flocationValue(cityObj,0);
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    case 'North America':
        {
            
            let city = flocationValue(cityObj,0);
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    case 'South America':
        {
            
            let city = flocationValue(cityObj,0);
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    case 'Asia':
        {
            
            let city = flocationValue(cityObj,0);
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    case 'Oceania':
        {
            
            let city = flocationValue(cityObj,0);
            console.log(continentObj.continent)
            console.log(city);
            break;
        }
    default : 
       console.log('Better luck next time!');
}