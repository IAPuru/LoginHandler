function SecureLogin (email) {
    this.email = email;
    console.log('SecureLogin instantiated');

    this.UserAuthenticate = function () {
        console.log('UserAuthenticate called');
        
    };

    this.SystemAuthenticate = function () {
        return true;
    };

    this.SystemPoll = function () {
        return true;
    };
}


function ValidateLogin()
{
    var email = $("#txtEmail").val();
    var user = new SecureLogin(email);
    user.UserAuthenticate();
   
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