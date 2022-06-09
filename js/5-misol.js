const arrNumbers = [-3, -2, 1, 5, -4, 6];

function calcMax(numb) {
  return Math.max.apply(null, numb);
}
console.log(calcMax(arrNumbers));
function calcMin(numb) {
  return Math.min.apply(null, numb);
}
console.log(calcMin(arrNumbers));

let missNumbers = [];
let num = [];

for (let i = calcMin(arrNumbers); i <= calcMax(arrNumbers); i++) {
  if (!arrNumbers.includes(i)) {
    missNumbers.push(i);
  }
}
console.log(missNumbers);