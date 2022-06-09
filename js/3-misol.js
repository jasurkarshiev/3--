let salaries = {
  Akmal: 1200,
  Salim: 5200,
  Karima: 1800,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let Monthly of Object.values(salaries)) {
    sum = sum + Monthly;
  }
  return sum;
}

console.log(sumSalaries(salaries));
