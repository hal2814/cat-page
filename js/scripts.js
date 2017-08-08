$(document).ready(function() {
  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("lightdark-theme");
  });
  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
  });
});
