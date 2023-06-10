function showTime() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var session = 'AM';

  if (hour == 0) {
    hour = 12; //12 hour format.
  }

  if (hour > 12) {
    hour = hour - 12;
    session = 'PM';
  }

  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('DigitalClock').innerHTML =
    hour + ':' + minutes + ':' + seconds + ' ' + session;

  setTimeout(showTime, 1000);
}

showTime();
