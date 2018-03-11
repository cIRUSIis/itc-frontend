const ajax = (url)=> {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", url, false)
  xhr.send()
    if (xhr.readyState != 4) return
    if (xhr.status != 200) {
      return `${xhr.status} : ${xhr.statusText}`
    } else {
      return xhr.responseText
    }

}
// 'use strict';
//
// let promise = fetch('https://www.reddit.com/top.json')
// .then(function(response) {
//   return response.json()
// }).then(function(json) {
//   console.log('parsed json', json)
// }).catch(function(ex) {
//   console.log('parsing failed', ex)
// })

let redditApi = JSON.parse(ajax("https://www.reddit.com/top.json"))

let children = redditApi.data.children
for (let i = 0; i < children.length; i++) {
  let srcImg =
    children[i].data.thumbnail.slice(-4) == ".jpg" ||
    children[i].data.thumbnail.slice(-4) == ".png"
      ? children[i].data.thumbnail
      : "https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png"
  let htmlCode = `
        <div>
        <img src="${srcImg}"/>
        <a href="https://reddit.com${children[i].data.permalink}"><h2>${
    children[i].data.title
  }</h2></a>
        </div>
    `
  document.write(htmlCode)
}
