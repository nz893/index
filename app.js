console.log(
  'time: ' + moment().format('MMMM Do YYYY, h:mm:ss a')
);
var update = function () {
  date = moment();
  dateAndTime.html(
    '<p>time: ' +
      date.format('dddd, MMMM Do YYYY, h:mm:ss a') +
      '</p>'
  );
};

$(document).ready(function () {
  dateAndTime = $('#date-and-time');
  update();
  setInterval(update, 1000);
});