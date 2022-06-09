let numbers = [];

let numberOne = numbers.push(Number(prompt("Введите 1 число")));
numberTwo = numbers.push(Number(prompt("Введите 2 число")));
numberThree = numbers.push(Number(prompt("Введите 3 число")));
numberFour = numbers.push(Number(prompt("Введите 4 число")));

function SumInput(numbers) {
  let barf = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    barf = barf + numbers[i];
  }

  return barf;
}

console.log(SumInput(numbers));
