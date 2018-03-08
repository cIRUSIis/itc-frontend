// Б.З. №1
function plus(a, b) {
  return a + b;
}
console.log('Б.З. 1 = ' + plus(1, 2));

// Б.З. №2
function multiply(a, b) {
  return a * b;
}
console.log('Б.З. 2 = ' + multiply(3, 10)); // Зачем здесь plus и for?

// Б.З. №3
function mergeArrays(arr1, arr2) {
  arr1.push(arr2);
  return arr1;
}
console.log('Б.З. 3 = ' + mergeArrays([1, 2, 3], [4, 5]));

//Б.З. №4 - не совсем понял, что нужно, но как то так
function filterFemales(people) {
  for (var i = 0; i < humanCount; i++) {
    if (people[i].sex == 'F') {
      console.log(people[i].name + ' любит ' + people[i].film);
    }
  }
}

let people = [];
let human = {};
let humanCount = prompt('Введи кол-во людей', '');
for (var i = 0; i < humanCount; i++) {
  people[i] = {
    name: prompt('Введи имя', ''),
    sex: prompt('Введи пол (M/F)', ''),
    film: prompt('Введи любимый фильм', '')
  }
}
filterFemales(people);

//Б.З. №5
function getQuadrant(x, y) {
  if (x == 0) {
    if (y == 0) {
      alert('Точка находится в начале координат');
    } else {
      alert('Точка лежит на оси OY');
    }
  } else if (y == 0) {
    alert('Точка лежит на оси OX');
  } else if (x > 0 && y > 0) {
    alert('Точка лежит в I коорд. четверти');
  } else if (x < 0 && y > 0) {
    alert('Точка лежит во II коорд. четверти');
  } else if (x < 0 && y < 0) {
    alert('Точка лежит в III коорд. четверти');
  } else {
    alert('Точка лежит в IV коорд. четверти');
  }
}
