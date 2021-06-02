$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const userName = $("#name").val();

    $(".card").show(userName);
    $("#form").hide();
  })
})