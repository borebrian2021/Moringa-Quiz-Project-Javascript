
$(document).ready(function() {
  $('#playGame').hide();
  $('#questions').hide();
var playerName;



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

$("#begin").click(function(){
  $('#questions').fadeIn('slow');
  $("#begin").effect("shake");


});
