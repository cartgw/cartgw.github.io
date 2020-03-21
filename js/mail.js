$(function() {
 
  // E-mail Ajax Send
  // https://denis-creative.com/contact-form-with-attached-file/
  // http://shpargalkablog.ru/2014/05/email-file-php.html
  // http://shpargalkablog.ru/2014/05/feedback-form-file.html
  document.getElementById('feedback-form').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "mail.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
        if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
          th.trigger("reset");
        }
      }
    }
    http.onerror = function() {
      alert('Извините, данные не были переданы');
    }
    http.send(new FormData(f));
  }, false);
 
});