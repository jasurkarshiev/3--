let arr = ["Jazz", "Blues"];
console.log(arr);

// 2-shart
arr.push("Rock-n-roll");
console.log(arr);

// 3-shart
const averageValue = function (arr) {
  return (arr.length - 1) / 2;
};

arr[averageValue(arr)] = "Classic";
console.log(arr);

// 4-shart
arr.shift();
console.log(arr);

// 5-shart
arr.unshift("Reggae");
arr.unshift("Rap");
console.log(arr);
