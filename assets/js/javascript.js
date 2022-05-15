//DECLARATION OF VARIABLES  
var playerName;
const allQuestions = 5;
var marks = 0;
var q1 = document.getElementsByName('q1');
var q2 = document.getElementsByName('q2');
var q3 = document.getElementsByName('q3');
var q4 = document.getElementsByName('q4');
var q5 = document.getElementsByName('q5');
var i = 0;
var txt = '  For each question, click the right answer and then submit. Do not refresh the page before submitting you answers.';
var speed = 20;


//DECLARATION OF FUNCTIONS HERE
function hideElements() {
  $('#playGame').hide();
  $('#questions').hide();
  $('#final').hide();
  $('#questions').hide();
  $('#calculating').hide();

}


function displayQuestions() {

  // alert("working")

  $("#questionWaiter").fadeOut();
  setTimeout(() => {
    var image = $("#changeImage");
    image.fadeOut('fast', function () {
      image.attr('src', './assets/images/best.png');
      image.fadeIn('fast');
    });

    $('#goodLuck').text('Good Luck!')
    $('#questions').fadeIn();



  }, "1000");



};

function awardRemarks() {
  var p = (marks / 100) * 100;

  if (p >= 80) {
    $('#remarksM').text("Excellently Passed!")


  }
  else if (p >= 50 && p < 80) {
    $('#remarksM').text("Fairly Passed!")

  }
  else {
    $('#remarksM').text("Poorly scored!")

  }
}
function typeWriter() {

  if (i < txt.length) {
    document.getElementById("writeText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
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
  awardRemarks();
  $('#scoreM').text(marks);
  setTimeout(() => {
    $("#remarks").effect("shake");

  }, "5000");
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
    setTimeout(() => {
      typeWriter();
    }, "5000");

    setTimeout(() => {
      displayQuestions();

    }, "10000");


    return false;
  });

});


$(document).on('submit', '#questions', function () {
  checkAnswers();

  $('#playGame').fadeOut();

  $("#calculating").fadeIn();

  setTimeout(() => {
    $("#calculating").fadeOut();

    $('#final').fadeIn();

  }, "4000");

  console.log(marks);
  return false;
});



