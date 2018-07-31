// display in the console the numbers from 1 to 20
console.log("Numbers 1 - 20");
for (i = 1; i <= 20; i++) {
  console.log(i);
}

// display in the console the odd numbers from 1 to 20
console.log("Odd numbers 1 - 20");
for (i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// compute the sum of the elements of an array and display it in the console
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array:", arr);
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("Sum of elements is", sum);

// compute the maximum of the elements of an array and display it in the console
var arr = [-5, 6, 48, -23, 32];
console.log("Array:", arr);
var max = arr[0];

for(var i = 0; i < arr.length; i++) {
  if(arr[i] > max) max = arr[i];
}

console.log("Max = " + max);

// compute how many times a certain element appears in an array
var arr = [2, 4, 2, 6, 2, 8];
console.log("Array:", arr);
var nr = 2;
var count = 0;

for (var i = 0; i < arr.length; i++) {
        if (arr[i] === nr) {
            count++;
        }
    }
console.log("Number", nr, "appear", count, " times");
