var today = $('#currentDay');
var hourEl = $('.hour');
var todoEl = $('#textarea');
var saveSectionEl = $('#saveSection');

var currentDay = moment();

var loggedTaskEl = $('input[name="newTodo"]')

$('#currentDay').text(currentDay.format("dddd, MMMM Do"));

function greeting() {
    var greet = $('<p>');
    greet.text('Good morning, friend! Today is');
    greet.attr('class', 'currentDay');

    today.prepend(greet);

    var encourage = $('<p>');
    encourage.text('Go have a great day!');
    encourage.attr('class', 'currentDay');

    today.append(encourage);
};

greeting();