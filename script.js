var today = $('#currentDay');
var hourEl = $('#hour');
var todoEl = $('#textarea');
var saveSectionEl = $('#save');
var containerEl = $('#container');

var textAreaInput = $('#form-control');

var currentDay = moment();
today.text(currentDay.format("dddd, MMMM Do"));


for (var i = 9; i < 17; i++) {
    var timeblock = $('<div>');
    timeblock.attr('id', 'time-block');
    
    containerEl.append(timeblock);
    
    var currentHour = $('<div>');
    currentHour.attr('id', 'hour');
    currentHour.text([i]);
    timeblock.append(currentHour);

    var userPutsTextHere = $('<textarea>');
    userPutsTextHere.attr('id', 'textarea');
    timeblock.append(userPutsTextHere);

    var userClicksThisBtn = $('<button>');
    userClicksThisBtn.attr('id', 'saveBtn');
    timeblock.append(userClicksThisBtn);
}

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