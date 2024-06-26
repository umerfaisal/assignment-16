// Creating a guest list array
var guestList = ["Umer", "Mubeen", "Huzaifa", "Areeb"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "don't want to come");
// Add or remove values FRom guest list array
guestList.splice(0, 1, "Rayyan");
// Message for bigger table
console.log("Good News ! We have found a bigger table for dinner.");
// Adding a new guest at Starting index of array
guestList.unshift("Ali");
// Adding a new guest at ending index of array
guestList.push("Rafay");
//get a middle index of our guest list  array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest to middle of index array
guestList.splice(middleIndex, 0, "Osama");
//Print message for updated list
console.log("Updated list of our guests");
// Sending a invitation message to our guests one by one with their name 
guestList.forEach(function (oneGuest) { return console.log("hello ".concat(oneGuest, ", Would you like to dinner with me? ")); });
