function hideElements(){
  $('#playGame').hide();
  $('#questions').hide();
  $('#final').hide();
  $('#questions').hide();



}


window.onload =   hideElements();

$(document).ready(function() {

  $('#remarks').hide();

//DECLARATION OF VARIABLES  
var playerName;






//FUNCTION SECTION




//HANDLING FORM SUBMIT AND AVOIDING PAGE RELOADING

    $(document).on('submit', '#my-form', function() {
        playerName=$('#name_input').val();
        $('#name_input').val('');
        $('#name').text("   | "+playerName);
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


    position: absolute;
    $(document).on('submit', '#questions', function() {
  alert('submitted')
return false;
});




$("#begin").click(function(){
  $('#questions').fadeIn('slow');
  $("#begin").effect("shake");


});
