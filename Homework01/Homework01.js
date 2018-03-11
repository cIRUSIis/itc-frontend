function ajax(url, callback) {
  var xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.send()
xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return
  if (xhr.status != 200) {
    callback ({error:true})
  }
  else{
    callback(xhr.responseText)
  }

}
}

ajax ('https://www.reddit.com/top.json', (posts=>{
 console.log(posts)
}))
