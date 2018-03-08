//№1
function plus() {
  for (var i = 0; i < arguments.length; i++) {
    var sum = 0
    sum += arguments[i]
  }
  return sum
}
console.log('З. 1 = ' + plus(1, 2))

//#2
var mult = (...args)=>args.reduce((m, cur)=>m * cur)
console.log(mult(1,5,6))

//#3
var objectToQueryString = obj=>{
  let link = 'http://домен/страница?'
  for (var key in obj){
    link += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]) +  '&' // не совсем въехал, что конкретно здесь нужно было
  }
  link = link.slice(0,-1)
  return link
}
console.log(objectToQueryString({name1:'Vasya', name2:'Petrov'}))
