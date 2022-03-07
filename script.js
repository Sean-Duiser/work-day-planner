var today = $('#currentDay');
var containerEl = $('#container');
var currentDay = moment();
var actualHour = moment().format('H');
today.text(currentDay.format("dddd, MMMM Do"));

//creates my individual time blocks
for (var i = 8; i < 18; i++) {
    var timeblock = $('<div>');
    timeblock.attr('id', 'time-block');
    
    containerEl.append(timeblock);
    
    //determines class for the time-block based on moment()
    if ([i]/10 < actualHour/10) {
        this.timeblock.addClass('past');
    }
    if ([i]/10 > actualHour/10) {
        this.timeblock.addClass('future');
    }
    if ([i] === actualHour) {
        this.timeblock.addClass('present');
    }

    createCurrentHour();
    createUserPutsTextHere();
    createUserClicksThisBtn();
    
};

//creates my hour divs
function createCurrentHour () {
    var currentHour = $('<div>');
    currentHour.attr('id', 'hour');
    currentHour.text([i] + ':00');

    timeblock.append(currentHour);

    localStorage.setItem('hey', JSON.stringify(currentHour.text));
};

//creates my textarea divs
function createUserPutsTextHere () {
    var userPutsTextHere = $('<input>');
    userPutsTextHere.attr('id', 'textarea');
    userPutsTextHere.attr('class', [i]);
    userPutsTextHere.attr('name', 'typeYourTask');
    timeblock.append(userPutsTextHere);
};

//creates my button divs
function createUserClicksThisBtn () {
    var userClicksThisBtn = $('<button>');
    userClicksThisBtn.attr('id', 'saveBtn');
    userClicksThisBtn.text('Save');
    userClicksThisBtn.attr('class', [i]);
    userClicksThisBtn.attr('name', 'saveYourTask');
   
    timeblock.append(userClicksThisBtn);
};

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