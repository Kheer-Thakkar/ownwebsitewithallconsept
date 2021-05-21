function adduser(){
    player1_name=document.getElementById("y").value;
    player2_name=document.getElementById("b").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location.replace("game_main_page.html");

}
var count = 0;
$(".show1").click(function() {
    count++;
    var isEven = function(someNumber) {
        return (someNumber % 2 === 0) ? true : false;
    };
    if (isEven(count) === false) {
      $(".cp").prop('type', 'text');
   $(".show1").css('color', '#069');
    } else if (isEven(count) === true) {
      $(".cp").prop('type', 'password');
   $(".show1").css('color', '#ccc');
    }
});


$(".signupbtn").click(function(){
 $(".login").addClass("rotate");
     $(".signup").addClass("rotate2");

       $(".login").removeClass("rotate3");

});


 $(".loginbtn").click(function(){
   $(".login").addClass("rotate3");
       $(".login").removeClass("rotate");
       $(".signup").removeClass("rotate2");

 });