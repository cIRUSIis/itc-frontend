function json(url) {
  var xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.send();

xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;

  if (this.status != 200) {
    alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
    return;
  }

}
}
