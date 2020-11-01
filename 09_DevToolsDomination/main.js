const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

console.log("Test logs");
// clearing
console.clear();
console.log("-----> clearing <-----");

// Regular
console.log("-----> Regular <-----");
console.log("hello");

// Interpolated
console.log("-----> Interpolated <-----");
console.log("Hello I am a %s string!", "💩");

// Styled
console.log("-----> Styled <-----");
console.log(
  "%c I am some great text",
  "font-size:50px; background:red; text-shadow: 10px 10px 0 blue"
);

// warning!
console.log("-----> warning! <-----");
console.warn("OH NOOO");

// Error :|
console.log("-----> Error :| <-----");
console.error("Shit!");

// Info
console.log("-----> Info <-----");
console.info("Crocodiles eat 3-4 people per year");

// Testing
console.log("-----> Testing <-----");
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

// Viewing DOM Elements
console.log("-----> Viewing DOM Elements <-----");
console.log(p);
console.dir(p);

// console.clear();

// Grouping together
console.log("-----> Grouping together <-----");
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.log("-----> counting <-----");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");

// timing
console.log("-----> timing <-----");
console.time("fetching data");
fetch("https://api.github.com/users/kewinlizarraga")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.log("-----> Log Table <-----");
console.table(dogs);
