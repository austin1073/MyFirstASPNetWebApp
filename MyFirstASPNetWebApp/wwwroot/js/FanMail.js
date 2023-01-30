////document.getElementById("#btnSend").addEventListener("click", function () {
////    alert("From: " + $("#txtFrom").val +
////        ", Subject: " + $("#txtSubject").val +
////        ", Message: " + $("#txtMessage").val);
////})

$("#btnSend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtSubject").val() +
        ", Message: " + $("#txtMessage").val());

    $("#picGanderson").fadeToggle();
})