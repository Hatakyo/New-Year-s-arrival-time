var newYear = ' 1 January 2022';

function countDown() {
    var newYearDAy = new Date(newYear);
    var currentDay = new Date();

    var totalSeconds = (newYearDAy - currentDay) / 1000;
    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var minutes = (Math.floor(totalSeconds / 60) % 60)
    var seconds = Math.floor(totalSeconds % 60);
    // console.log(days, hours, minutes, seconds)

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


}

countDown();

setInterval(countDown, 1000);
