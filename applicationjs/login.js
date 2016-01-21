function User (email) {
    this.email = email;
  
}
//	​
//User.prototype = {
//    constructor: User,
//    showLogin:function ()  {
       
//        return this.email;
//    },

//    changeEmail:function (newEmail)  {
//        this.email = newEmail;
//        return "New Email Saved: " + this.email;
//    }
//}

function ValidateLogin()
{
  
    if ($("#btnLogin").text() == "Next") {
        $("#divPin").show();
        $("#divEmail").hide();
        $("#btnLogin").text("Login");
    }
    else {
        HideControls();
        $("#status").html("Processing please wait..");
       
        setTimeout(LoginSuccess, 2000);
    }
   
}

function HideControls()
{
    $("#divPin").hide();
    $("#divEmail").hide();
    $("#btnLogin").hide();
}

function ShowControls() {
   
    $("#divEmail").show();
    $("#btnLogin").text("Next");
    $("#btnLogin").show();
    $("#status").html("");
}

function LoginSuccess() {
    $("#status").html("Login success.");
    setTimeout(LoginOut, 2000);
}

function LoginOut() {
    $("#status").html("Logout...");
    setTimeout(ShowControls, 1000);
}