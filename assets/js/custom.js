function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  }
  function validate() {

    let result = $("#result");
    let email = $("#email1").val();
    //let email = document.getElementById("email1").innerText;
    result.text("");
    if(email == "" || email ==null){
      result.text("Please Enter Email Address");
      result.css("color", "red");
    }
    else{
    if(validateEmail(email)) {
      result.text("Your Subscription is activated successfully");
      result.css("color", "blue");
    } else {
      result.text(email + " is not valid Email");
      result.css("color", "red");
    }
  }
    return false;
  }
  // $("#validate").on("click", validate);