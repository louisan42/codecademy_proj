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
let obj = outputs.destination;
let continentObj = flocationValue(obj);
console.log(continentObj.cities)
let city = "";
switch(continentObj.continent){
    case 'Africa':
        {
            city = randomChoice(outputs.destination.indexOf(continentObj))
            console.log(city);
            break;

        }
}