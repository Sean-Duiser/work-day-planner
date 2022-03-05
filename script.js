var today = $('#currentDay');
var containerEl = $('#container');
var currentDay = moment();
var actualHour = moment().format('H');
today.text(currentDay.format("dddd, MMMM Do"));

//creates my individual time blocks
for (var i = 9; i < 17; i++) {
    var timeblock = $('<div>');
    timeblock.attr('id', 'time-block');
    
    containerEl.append(timeblock);
    
    createCurrentHour();
    createUserPutsTextHere();
    createUserClicksThisBtn();
    
    if (Number[i] < actualHour) {
        this.timeblock.addClass('future');
    }
    if (Number[i] > actualHour) {
        this.timeblock.addClass('past');
    }
    if (i === actualHour) {
        this.timeblock.addClass('present');
    }
};

function createCurrentHour () {
    var currentHour = $('<div>');
    currentHour.attr('id', 'hour');
    currentHour.text([i]);

    timeblock.append(currentHour);
};

function createUserPutsTextHere () {
    var userPutsTextHere = $('<input>');
    userPutsTextHere.attr('id', 'textarea');
    userPutsTextHere.attr('class', [i]);
    userPutsTextHere.attr('name', 'typeYourTask');
    timeblock.append(userPutsTextHere);
};

function createUserClicksThisBtn () {
    var userClicksThisBtn = $('<button>');
    userClicksThisBtn.attr('id', 'saveBtn');
    userClicksThisBtn.text('Save');
    userClicksThisBtn.attr('class', [i]);
    userClicksThisBtn.attr('name', 'saveYourTask');
   
    timeblock.append(userClicksThisBtn);
};

//if (actualHour )

//gives the user a greeting when they open the page
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