$(".Part-Two-4").hide();
$(".Part-Two-1").hide();
$(".Part-Two-11").hide();
$(".Story-Ending-Infamous").hide();
$(".You-are-button").hide();
$("#shoe1").click(function() {
    $(".Part-Two-4").show();
    $(".Part-Two-11").hide();
    $(".Part-Two-1").hide();
    $(".You-are-button").show();
});
$("#shoe2").click(function() {
    $(".Part-Two-11").show();
    $(".Part-Two-4").hide();
    $(".Part-Two-1").hide();
    $(".You-are-button").show();
});
$("#shoe3").click(function() {
    $(".Part-Two-1").show();
    $(".Part-Two-4").hide();
    $(".Part-Two-11").hide();
    $(".You-are-button").show();
});
    
$(".You-are-button").click(function() {
    $(".title").hide();
    $(".Part-Two-1").hide();
    $(".Part-Two-4").hide();
    $(".Part-Two-11").hide();
    $(".You-are-button").hide();
    $("#shoe1").hide();
    $("#shoe2").hide();
    $("#shoe3").hide();
    $(".Story-Ending-Infamous").show();
});

$(".final").click(function() {
    $(".Story-Ending-Infamous").hide();
    $(".title").show();
    $("#shoe1").show();
    $("#shoe2").show();
    $("#shoe3").show();
    $(".You-are-button").hide();
      });
    
