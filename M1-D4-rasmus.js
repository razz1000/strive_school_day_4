/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* let shoppingList = [1, 2, 3, 4, 5];
 */


/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/


 
 let shoppingList = {
    name: "Rasmus",
    surname: "Sørensen",
    email: "something@something.dk",
    address: "My address",
    age: 37
}
 
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

 shoppingList.drivingLicense = false;
 

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete shoppingList.age; 


/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let shoppingList2 = {
    name: "peter",
    surname: "Petersen",
    email: "test@test.dk",
}
console.log("This is the email from shopping List:\n", shoppingList.email, "\nAnd this is the email from shopping list 2:\n", shoppingList2.email);



/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */

let shipping = 10;
let totalShoppingCart = 70;

if (totalShoppingCart > 50) {
    totalShoppingCart = totalShoppingCart + shipping
} else {
    totalShoppingCart
}
console.log(totalShoppingCart)




/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

totalShoppingCart = 70 * 0.8;

totalShoppingCart > 50 ? totalShoppingCart = totalShoppingCart + shipping : totalShoppingCart;

console.log(totalShoppingCart);


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let cars = {
    brand:"Porche",
    model: "Cayenne",
    licensePlate: 1111111
}

let cars2 = {}
Object.assign(cars2, cars);
cars2.licensePlate = 2222222;

let cars3 = {}
Object.assign(cars3, cars);
cars3.licensePlate = 33333333;

let cars4 = {}
Object.assign(cars4, cars);
cars4.licensePlate = 444444444;

let cars5 = {}
Object.assign(cars5, cars); 
cars5.licensePlate = 55555555;

console.log(cars.licensePlate, cars2.licensePlate, cars3.licensePlate, cars4.licensePlate, cars5.licensePlate)


/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/


let carsForRent = [cars, cars2, cars3, cars4, cars5];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop(); // removes the last index on the list 
carsForRent.shift(); // Removes the first index on the list. 

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.table(carsForRent);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [];
carsForSale.push(cars2, cars3, cars4);

let totalCars = carsForSale.length + carsForRent.length;



/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/


let x = 0;
while (x < carsForSale.length) {
    console.table(carsForSale[x])
    x++
}
 
/* Or this below one using the for loop model:


for (let i = 0; i<carsForSale.length; i++) {
    console.table(carsForSale[i])
}


*/ 




/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
