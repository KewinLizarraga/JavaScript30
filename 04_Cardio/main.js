// ## Array Cardio Day 1
// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
  "",
];

// ==============================================================

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1550 && inventor.year < 1600
);
console.log("Array.prototype.filter()");
console.log(
  "1. Filter the list of inventors for those who were born in the 1500s"
);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const fullNames = inventors.map((dato) => `${dato.first} ${dato.last}`);
console.log("Array.prototype.map()");
console.log("2. Give us an array of the inventor first and last names");
console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log("Array.prototype.sort()");
console.log("3. Sort the inventors by birthdate, oldest to youngest");
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
let p_totalYears = document.getElementById("totalYears");
p_totalYears.innerHTML = totalYears;
console.log("Array.prototype.reduce()");
console.log("4. How many years did all the inventors live?");
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  return a.passed - a.year > b.passed - b.year ? -1 : 1;
});
console.log("5. Sort the inventors by years lived");
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((a, b) => {
  const [aLast, aFirst] = a.split(", ");
  const [bLast, bFirst] = b.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log("7. sort Exercise");
console.log("Sort the people alphabetically by last name");
console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];

const transportation = [];
transportation.push(
  data.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {})
);
console.log("8. Reduce Exercise");
console.log("Sum up the instances of each of these");
console.table(transportation);
// ==============================================================
function generateTableArray(table, data) {
  for (let i = 0; i < data.length; i++) {
    let row = table.insertRow();
    let cell = row.insertCell();
    let text = document.createTextNode(data[i]);
    cell.appendChild(text);
  }
}
// FullNames
let tableFullNames = document.querySelector("#fullNames");
let dataFullNames = fullNames;
generateTableArray(tableFullNames, dataFullNames);
// Alpha
let tableAlpha = document.querySelector("#alpha");
let dataAlpha = alpha;
generateTableArray(tableAlpha, dataAlpha);
// ==============================================================
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (const key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
function generateTable(table, data) {
  let tbody = table.createTBody();

  for (const element of data) {
    let row = tbody.insertRow();
    for (const key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
// Inventors
let tableInventors = document.querySelector("#inventors");
let dataInventors = Object.keys(inventors[0]);
generateTableHead(tableInventors, dataInventors);
generateTable(tableInventors, inventors);
// Fifteen
let tableFifteen = document.querySelector("#fifteen");
let dataFifteen = Object.keys(fifteen[0]);
generateTableHead(tableFifteen, dataFifteen);
generateTable(tableFifteen, fifteen);
// Ordered
let tableOrdered = document.querySelector("#ordered");
let dataOrdered = Object.keys(ordered[0]);
generateTableHead(tableOrdered, dataOrdered);
generateTable(tableOrdered, ordered);
// Oldest
let tableOldest = document.querySelector("#oldest");
let dataOldest = Object.keys(oldest[0]);
generateTableHead(tableOldest, dataOldest);
generateTable(tableOldest, oldest);
// Transportation
let tableTransportation = document.querySelector("#transportation");
let dataTransportation = Object.keys(transportation[0]);
generateTableHead(tableTransportation, dataTransportation);
generateTable(tableTransportation, transportation);
// ==============================================================
// People
let newPeople = [];
for (let i = 0; i < 7; i++) {
  const arr = people.slice(i * 6, (i + 1) * 6);
  newPeople.push(arr);
}
function generateTablePeople(table, data) {
  const mi = Math.round(Math.sqrt(data.length));
  const num = Math.round(data.length / mi);
  for (let i = 0; i < num; i++) {
    let row = table.insertRow();
    for (let j = 0; j < mi; j++) {
      let cell = row.insertCell();
      text = document.createTextNode(newPeople[i][j]);
      cell.appendChild(text);
    }
  }
}
let tablePeople = document.querySelector("#people");
generateTablePeople(tablePeople, people);
