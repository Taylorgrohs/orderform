$(document).ready(function(){
  $("form").submit(function(event){
    var name = $("input#name").val().toUpperCase();
    var address = $("input#address").val();

    $(".name").text(name);
    $(".address").text(address);
    $(".name").css("font-weight", "bold");
    $(".address").css("font-weight", "bold");
    $(".address").css("font-size", "20px");

    $("#receipt").show();
    event.preventDefault();
  });
});
