//DECLARATION OF VARIABLES  
var playerName;
const allQuestions = 5;
var marks = 0;
var q1 = document.getElementsByName('q1');
var q2 = document.getElementsByName('q2');
var q3 = document.getElementsByName('q3');
var q4 = document.getElementsByName('q4');
var q5 = document.getElementsByName('q5');



//DECLARATION OF FUNCTIONS HERE
function hideElements() {
  $('#playGame').hide();
  $('#questions').hide();
  // $('#final').hide();
  $('#questions').hide();
  $('#calculating').hide();

}

function checkAnswers() {
  for (let i of q1) {

    if (i.checked && i.value == 1) {
      marks = marks + 20;
    }
  }
  for (let i of q2) {

    if (i.checked && i.value == 1) {
      marks = marks + 10;
    }
  }
  for (let i of q3) {

    if (i.checked && i.value == 1) {
      marks = marks + 30;
    }
  }
  for (let i of q4) {

    if (i.checked && i.value == 1) {
      marks = marks + 20;
    }
  }
  for (let i of q5) {

    if (i.checked && i.value == 1) {
      marks = marks + 20;
    }
  }


}
window.onload = hideElements();

$(document).ready(function () {










  //HANDLING FORM SUBMIT AND AVOIDING PAGE RELOADING

  $(document).on('submit', '#my-form', function () {
    playerName = $('#name_input').val();
    $('#name_input').val('');
    $('#name').text("   | " + playerName);
    $('#name2').text(playerName);

    setTimeout(() => {
      $('#welcome').fadeOut('slow');


    }, "1000");
    setTimeout(() => {
      $('#playGame').fadeIn('slow');


    }, "2000")
    setTimeout(() => {
      $("#instructions").effect("shake");

    }, "4000");


    return false;
  });

});


$(document).on('submit', '#questions', function () {
  checkAnswers();

  $('#playGame').fadeOut();
  $('#remarks').hide();

  $("#calculating").fadeIn();

  setTimeout(() => {
    $("#calculating").fadeOut();

    $('#final').fadeIn();

  }, "4000");

console.log(marks);
  return false;
});




$("#begin").click(function () {
  $('#questions').fadeIn();
  $("#begin").effect();
});
