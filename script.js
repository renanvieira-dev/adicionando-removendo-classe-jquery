$("button").click(() => {
    $(".okButton").css("background", "red");
    $("button").css("display", "none");
    $(".remove").css("display", "block");
});

$(".remove").click(() => {
    $(".okButton").css("background-color", "#45a");
    $("button").css("display", "block");
    $(".remove").css("display", "none");
});