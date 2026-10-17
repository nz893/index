console.log(
  'time: ' + moment().format('MMMM Do YYYY, h:mm:ss a')
);
var update = function () {
  date = moment();
  dateAndTime.html(
    '<h2>time: ' +
      date.format('dddd, MMMM Do YYYY, h:mm:ss a') +
      '</h2>'
  );
};

$(document).ready(function () {
  dateAndTime = $('#date-and-time');
  update();
  setInterval(update, 1000);
});