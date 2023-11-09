const groceries = [
  { id: 1, names: "oil", price: 17 },
  { id: 2, names: "soap", price: 16 },
  { id: 3, names: "tomatoes", price: 14 },
  { id: 4, names: "onions", price: 13 },
  { id: 5, names: "greenPaper", price: 13 },
  { id: 6, names: "cabbage", price: 15 },
  { id: 7, names: "rice", price: 12 },
  { id: 8, names: "butter", price: 14 },
  { id: 9, names: "chickenWings", price: 14 },
  { id: 10, names: "currySpices", price: 13 },
  { id: 11, names: "lettuce", price: 15 },
];
const names = prompt("Enter a grocery name, we will try to find it", "onions");

//use find method
const findSearch = groceries.find((grocery) => grocery.names === names);

if (findSearch) {
  console.log("we found it");
} else {
  console.log(`we did not find the item with the name ${names}`);
}

// use the filter items method

const filterSearch = prompt(
  " Enter a string, we will check the groceries list, to see, which has that string in their name",
  "lettuce"
);

const filteredGroceries = groceries.filter((grocery) =>
  grocery.names.includes(filterSearch)
);
console.log(filteredGroceries);

// use the map method

const groceryMapping = prompt(
  "Choose a key, ID, name, or price so we can display the values associated with their input",
  "price"
);
const mappedGroceries = groceries.map((grocery) => grocery[groceryMapping]);
console.log("Mapped Values", mappedGroceries);

// use the reduce method

const keyForReducing = prompt(
  "Choose a key, either the ID or, better yet, the price, and store it in a variable",
  "price"
);
const reducedGroceries = groceries.reduce(
  (accumulator, item) => (accumulator += item[keyForReducing])
);
console.log(reducedGroceries);

// For splice method

const keyForSplice = prompt(
  "Choose a Name of an item you want to remove",
  "oil"
);

const index = groceries.findIndex((grocery) => grocery.names === keyForSplice);
if (index !== -1) {
  const slicedGroceries = groceries.splice(index, 1);
  console.log(slicedGroceries);
  //   console.log(groceries);
} else {
  console.log(`Not found`);
}
