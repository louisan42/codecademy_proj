// Random vacation lottery
// Author: Louis Amoah-Nuamah

const randomChoice = (n) => {
    return Math.floor(Math.random() * n)
};
// uncomment code below to test random pick
//console.log(randomChoice());

let destinationArr = [{continent:'Africa',cities:['Accra','Cairo','Johannesburg']}, {continent:'Africa',cities:['London','Berlin','Athens']}, 
{continent:'Africa',cities:['Miami','Vancouver','Cancun']}, {continent:'Africa',cities:['Quito','Bogota','Rio de Janeiro']}, 
{continent:'Africa',cities:['Bali','Tokyo','Shanghai']}, {continent:'Africa',cities:['Sydney','Queenstown','Vanua Levu']}];

const outputs = {
    continent : ['Africa','Europe','North America','South America','Asia','Oceania'],
    destination: [],
    set destinations(destinationArr){
        this.destination = destinationArr;
    },
    lengthOfStay : ['2 weeks', '3 weeks', '4 weeks']

}

let finalOutput = [];
outputs.destinations(destinationArr);
let spinNumber = randomChoice(outputs.continent.length());
let continent = outputs.continent[spinNumber];

switch(continent){
    case 'Africa':
        {

        }
}