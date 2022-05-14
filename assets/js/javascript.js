
$(document).ready(function() {

var playerName;
$('#playGame').hide();

    $(document).on('submit', '#my-form', function() {
        playerName=$('#name_input').val();
        $('#name_input').val('');
        $('#name').text("  | "+playerName);
        alert(playerName)
      setTimeout(() => {
        $('#welcome').fadeOut('slow');


}, "3000");
setTimeout(() => {
    $('#playGame').fadeIn('slow');
$('#name').text('')

}, "6000")
      return false;
     });
   
});

// $('#process_welcome').submit(function() {
//     e.preventDefault();

// });



// function handleWelcome(){

//     $('#welcome').hide('slow');
        
//     }