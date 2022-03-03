var today = $('#currentDay');

var currentDay = moment();
$('#currentDay').text(currentDay.format("dddd, MMMM Do"));

function greeting() {
    var greet = $('<p>');
    greet.text('Good morning, friend! Today is ');
    greet.attr('class', 'currentDay');

    today.prepend(greet);
}

greeting();
