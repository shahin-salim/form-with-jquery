var validate = 0;

$("#submit-form").submit((e) => {
     validate = 0;

     userName();
     checkTheRegForEmail();
     blurNumber();
     Messege();

     e.preventDefault();
     if (validate == 4) {
          $.ajax({
               url: "https://script.google.com/macros/s/AKfycbypbwxZLDxjQ2H2rpARxkW5QEyzDEwy2dU9zQG2/exec",
               data: $("#submit-form").serialize(),
               method: "post",
               success: function (response) {
                    alert("Form submitted successfully");
                    window.location.reload();
                    //window.location.href="https://google.com"
               },
               error: function (err) {
                    alert("Something Error");
               },
          });
     }
});
var namereg = /^[a-zA-Z ]*$/;
var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var numReg = /^\d+$/;
var err = document.getElementsByClassName("error");

function userName() {
     if ($("#username").val() == "") {
          err[0].innerHTML = "fill this feild";
     } else if ($("#username").val().trim() == "") {
          err[0].innerHTML = "space not allowded";
     } else if (namereg.test($("#username").val()) == false) {
          err[0].innerHTML = "only charcter allowded";
     } else {
          err[0].innerHTML = "";
          validate += 1;
     }
}

function Email() {
     if ($("#email").val() == "") {
          err[1].innerHTML = "fill this feild";
          return false;
     } else if ($("#email").val().trim() == "") {
          err[1].innerHTML = "space not allowded";
          return false;
     } else {
          err[1].innerHTML = "";
          return true;
     }
}

function checkTheRegForEmail() {
     if (Email() == true) {
          if (emailReg.test($("#email").val()) == false) {
               err[1].innerHTML = "enter valid email";
          } else {
               err[1].innerHTML = "";
               validate += 1;
          }
     }
}

function Number() {
     if ($("#number").val() == "") {
          err[2].innerHTML = "fill this field";
     } else if ($("#number").val().trim() == "") {
          err[2].innerHTML = "space not allowded";
     } else if (numReg.test($("#number").val().trim()) == false) {
          err[2].innerHTML = "only numbers are allowded";
     } else if ($("#number").val().trim().length > 10) {
          err[2].innerHTML = "maximum length is 10";
     } else {
          err[2].innerHTML = "";
          return true;
     }
}

function blurNumber() {
     if (Number() == true) {
          if ($("#number").val().trim().length < 10) {
               err[2].innerHTML = "minimum length is 10 digit";
          } else {
               err[2].innerHTML = "";
               validate += 1;
          }
     }
}

function Messege() {
     if ($("#messege").val() == "") {
          err[3].innerHTML = "fill this field";
     } else if ($("#messege").val().trim() == "") {
          err[3].innerHTML = "space not allowded";
     } else {
          err[3].innerHTML = "";
          validate += 1;
     }
}
