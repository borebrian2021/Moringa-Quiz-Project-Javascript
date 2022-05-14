
$(document).ready(function() {

var playerName;
$('#playGame').hide();

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

// $('#process_welcome').submit(function() {
//     e.preventDefault();

// });



// function handleWelcome(){

//     $('#welcome').hide('slow');
        
//     }