var today = $('#currentDay');
var hourEl = $('#hour');
var todoEl = $('#todo');
var saveSectionEl = $('#saveSection');
var plannerEl = $('#planner');
var loggedTaskEl = $('.textarea')

var currentDay = moment();
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

// function assemblePlanner() {
//     var timeBlockEl = $('<div>');
//     timeBlockEl.addClass('timeBlock');
//     timeBlockEl.append(plannerEl);
// };

// assemblePlanner();

var timeBlockEl = $('<div>');
timeBlockEl.addClass('timeBlock');
plannerEl.append(timeBlockEl);

var actualHours = $('<div>');
actualHours.addClass('hours');
timeBlockEl.append(actualHours);

var taskField = $('<input>');
taskField.addClass('textarea');
timeBlockEl.append(taskField);

function handleTaskSubmit(event) {
    event.preventDefault();

    var taskToLog = $('input[class="textarea"]').val();
    console.log($('input[class="textarea"]').val());

    
}

greeting();

