function assemblePlanner() {
    var timeBlock = $('<div>');
    timeBlock.att('id', 'timeBlocks');
    plannerEl.appendChild(timeBlock);
}

assemblePlanner();

//timeblock div that worked fine in index.html
<div id="timeBlocks">
      <!-- Timeblocks go here -->
      <div id="hour">
        <p>hour goes here</p>
      </div>
      <div id="todos">
        <form id="logItem">
          <input type="text" id="loggedTask">
      </div>
      <div id="saveSection">
        <input type="submit">
      </div>
    </div>