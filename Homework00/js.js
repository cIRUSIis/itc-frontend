// Б.З. №1
function plus(a, b) {
  return a + b
}
console.log("Б.З. 1 = " + plus(1, 2))

// Б.З. №2
function multiply(a, b) {
  let sum = 0
  for (let i = 0; i < b; i++) {
    sum += a
  }
  return sum
}
console.log("Б.З. 2 = " + multiply(3, 10))

// Б.З. №3
function mergeArrays(arr1, arr2) {
  arr1.push(arr2)
  return arr1
}
console.log("Б.З. 3 = " + mergeArrays([1, 2, 3], [4, 5]))

//Б.З. №4
function filterFemales(people) {
  for (var i = 0; i < humanCount; i++) {
    if (people[i].sex == "F") {
      console.log(people[i].name + " любит " + people[i].film)
    }
  }
}

let humanCount = prompt("Введи кол-во людей", "")
let people = [] // Надо
for (var i = 0; i < humanCount; i++) {
  people[i] = {
    name: prompt("Введи имя", ""),
    sex: prompt("Введи пол (M/F)", ""),
    film: prompt("Введи любимый фильм", "")
  }
}
filterFemales(people)

//Б.З. №5
function getQuadrant(x, y) {
  if (x == 0) {
    if (y == 0) {
      console.log("Точка находится в начале координат")
    } else {
      console.log("Точка лежит на оси OY")
    }
  } else if (y == 0) {
    console.log("Точка лежит на оси OX")
  } else if (x > 0 && y > 0) {
    console.log("Точка лежит в I коорд. четверти")
  } else if (x < 0 && y > 0) {
    console.log("Точка лежит во II коорд. четверти")
  } else if (x < 0 && y < 0) {
    console.log("Точка лежит в III коорд. четверти")
  } else {
    console.log("Точка лежит в IV коорд. четверти")
  }
}
getQuadrant(1, 2)
getQuadrant(-1, 2)
getQuadrant(-2, -3)
getQuadrant(4, -7)
getQuadrant(0, 0)

//№1
const plusForTask1 = (...theArgs) => {
  let sum = 0
  for (let i = 0; i < theArgs.length; i++) {
    sum += theArgs[i]
  }
  return sum // по другому никак не вышло, не ругай за return
}
console.log("Зад. 1 = " + plusForTask1(1, 2, 3))

//#2
var mult = (...args) => args.reduce((m, cur) => m * cur)
console.log("Зад. 2 = " + mult(1, 5, 6))

//#3
var objectToQueryString = obj => {
  let link = "http://домен/страница?"
  for (var key in obj) {
    link += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]) + "&"
  }
  link = link.slice(0, -1)
  return link
}
console.log(
  "Зад. 3 = " +
    objectToQueryString({
      name1: "Vasya",
      name2: "Petrov"
    })
)

//#4
humanCount = prompt("Введи кол-во людей", "")
for (var i = 0; i < humanCount; i++) {
  people[i] = {
    name: prompt("Введи имя", ""),
    sex: prompt("Введи пол (M/F)", ""),
    film: prompt("Введи любимый фильм", "")
  }
}
let femaleHuman = people.filter(human => (human.sex = "F"))
for (var i = 0; i < humanCount; i++) {
  console.log(
    "Зад. 4." + i + " = " + femaleHuman[i].name + " любит " + people[i].film
  )
}

//#5
function getIn(obj, path, def) {
  return path.reduce(function(left, rigth) {
    if (left[rigth] !== undefined) return left[rigth]
    else return def
  }, obj)
}

var a = {
  name: "ivan",
  sex: "male",
  books: {
    author: "Dostoevsky",
    book: "VIM"
  }
}
console.log(getIn(a, ["books", "auhor"], "wtf"))
