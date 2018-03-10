//№1
function plus() {
  for (var i = 0; i < arguments.length; i++) {
    var sum = 0
    sum += arguments[i]
  }
  return sum
}
console.log('Зад. 1 = ' + plus(1, 2))

//#2
var mult = (...args) => args.reduce((m, cur) => m * cur)
console.log('Зад. 2 = ' + mult(1, 5, 6))

//#3
var objectToQueryString = obj => {
  let link = 'http://домен/страница?'
  for (var key in obj) {
    link += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]) + '&' // не совсем въехал, что конкретно здесь нужно было
  }
  link = link.slice(0, -1)
  return link
}
console.log('Зад. 3 = ' + objectToQueryString({
  name1: 'Vasya',
  name2: 'Petrov'
}))

//#4
let people = []
let human = {}
let humanCount = prompt('Введи кол-во людей', '')
for (var i = 0; i < humanCount; i++) {
  people[i] = {
    name: prompt('Введи имя', ''),
    sex: prompt('Введи пол (M/F)', ''),
    film: prompt('Введи любимый фильм', '')
  }
}
let femaleHuman = people.filter(human => human.sex = 'F') // в принципе основная строка
for (var i = 0; i < humanCount; i++) {
  console.log('Зад. 4.' + i + ' = ' + femaleHuman[i].name + ' любит ' + people[i].film)
}

//#5
function getIn(obj, path, def) {

  return path.reduce(function(left, rigth) {
    if (left[rigth] !== undefined) return left[rigth]
    else return def
  }, obj)
}

var a = {
  name: 'ivan',
  sex: 'male',
  books: {
    author: 'Dostoevsky',
    book: 'VIM'
  }
}
console.log(getIn(a, ['books', 'auhor'], 'wtf')) // как wtf нормально вывести?
