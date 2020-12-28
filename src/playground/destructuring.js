//
//Object destructuring
//
// const person = {
//   name: "Fardis",
//   age: 22,
//   location: {
//     city: "Bonn",
//     temp: 5,
//   },
// };

// //on the left side we provide things that we want from the object on the right side
// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temprature } = person.location;
// console.log(`It's ${temprature} in ${city}`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };
// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

//
//Array destructuring
//

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19934",
];

const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [name, , medium] = item;
console.log(`A medium ${name} costs ${medium}`);
