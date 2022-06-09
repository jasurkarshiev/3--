arr = [1, 3, 8, 5, 6];
arrEvenNumber = [];
arrOddNumber = [];
arrAllNumber = [];

function calcSum(arr) {
  let sum = [],
    odd = 0,
    event = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 == 0) {
      event = event + arr[i];
    } else {
      odd = odd + arr[i];
    }
  }
  sum.push(event);
  sum.push(odd);
  return sum;
}

console.log(calcSum(arr));
