// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let shoppingList = [1, 3, 5];
shoppingList.reverse();
console.log(shoppingList) // Prints [5, 3, 1]


/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

shoppingList3 = [1, 100, 500, 200];
console.log(Math.max(...shoppingList3)); // Prints 500.


/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log(Math.min(...shoppingList3))

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let shoppingList4 = [1, 2, 5, 6, 8, 9, 11, 12];

for (let i = 0; i < shoppingList4.length; i++) {
    if (shoppingList4[i] % 2 === 0) {
        console.log(shoppingList4[i] + " is an even number");
    }
}


/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

let shoppingList5 = [1, 3, 5, 4, 6, 9, 12, 15, 18, 20]

for (let i = 0; i < shoppingList5.length; i++) {
    if (shoppingList5[i] % 2 === 0) {
        shoppingList5.splice(i,1);
    }
}
console.log(shoppingList5)


/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/


let words = ["a", "example", "another Example"];
let none = '';
for (let i = 0; i < words.length; i++) {
    if (words === "a")  {
        
    }
}

console.log(words)


/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let numbers = [1,2,3,4];
numbers = numbers.map(function(i){return ++i;});
console.log(numbers);


/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let shoppingList6 = ["milk", "banana", "apple"];

for(let i=0; i < shoppingList6.length; i++) {
    shoppingList6[i] = shoppingList6[i].replace(shoppingList6.length);
   }

   console.log(shoppingList6)


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
