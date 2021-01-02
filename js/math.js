const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour*hoursPerDay;
console.log(`there are ${secondsPerDay} seconds in a day`);

const yearsAlive = secondsPerDay* daysPerWeek*weeksPerYear*25;
console.log(`I've been alive for more then ${yearsAlive} seconds!`);