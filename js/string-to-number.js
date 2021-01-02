const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

/*const totalBadges = HTMLBadges + CSSBadges;
console.log(totalBadges);
console.log( typeof HTMLBadges, typeof CSSBadges);// return string
*/
console.log(typeof parseInt(HTMLBadges), typeof parseInt(CSSBadges) );// return integer


const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
console.log (totalBadges);

const pi = '3.14';
console.log(typeof +pi); //return number bc of the + 

