const image = data => {
  if (data.slice(-4) == ".jpg" || data.slice(-4) == ".png") {
    return data
  } else {
    return "https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png"
  }
}
// Реализация через xhr
// const ajax = url => {
//   var xhr = new XMLHttpRequest()
//   xhr.open("GET", url, false)
//   xhr.send()
//   if (xhr.readyState == 4) {
//     if (xhr.status != 200) {
//       return `${xhr.status} : ${xhr.statusText}`
//     } else {
//       return xhr.responseText
//     }
//   }
// }
// let redditApi = JSON.parse(ajax("https://www.reddit.com/top.json"))
// let children = redditApi.data.children
// let posts = []
// for (let i = 0; i < children.length; i++) {
//   let srcImg = image(children[i].data.thumbnail)
//   posts.push (`
//   <div>
//     <img src="${srcImg}"/>
//     <a href="https://reddit.com${children[i].data.permalink}"><h2>${children[i].data.title}</h2></a>
//   </div>
//   `)
// }
// document.body.innerHTML = posts

// Реализация через fetch и промисы
setTimeout(
  fetch("https://www.reddit.com/top.json")
    .then(response => response.json())
    .then(listOfPosts => {
      return listOfPosts.data.children
    })
    .then(listOfPosts => {
      let posts = []
      listOfPosts.forEach(post => {
        let srcImg = image(post.data.thumbnail)
        posts.push(`
        <div>
          <img src="${srcImg}"/>
          <a href="https://reddit.com${post.data.permalink}"><h2>${
          post.data.title
        }</h2></a>
        </div>
        `)
      })
      return posts
    })
    .then(posts => {
      document.body.innerHTML = posts
    })
    .catch(err => {
      console.log("Fetch Error :-S", err)
    }),
  10000
)
