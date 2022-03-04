var today = $('#currentDay');
var hourEl = $('.hour');
var todoEl = $('.textarea');
var saveSectionEl = $('.save');

var textAreaInput = $('.form-control');
var currentDay = moment();

var loggedTaskEl = $('input[class="form-control"]')
console.log(loggedTaskEl);

today.text(currentDay.format("dddd, MMMM Do"));

// for (var i = 0; i < hourEl.length; i++) {
//     hourEl.text(moment("8", "k").format("HH"))
// }

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