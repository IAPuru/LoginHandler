function SecureLogin (email) {
    this.email = email;
    console.log('SecureLogin instantiated');

    this.UserAuthenticate = function () {
        console.log('UserAuthenticate called');
        return true;
        
    };

    this.SystemAuthenticate = function () {
        console.log('SystemAuthenticate called');
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
    if (user.UserAuthenticate()) {
        if ($("#btnLogin").text() == "Next") {
            $("#divPin").show();
            $("#divEmail").hide();
            $("#btnLogin").text("Login");
        }
        else {
            $("#status").html("Processing please wait..");
            if (user.SystemAuthenticate()) {
                HideControls();
                setTimeout(LoginSuccess, 2000);
            }
            else
                LoginFailed();//default login page
        }
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

function LoginFailed() {
    $("#status").html("Login failed.");
    window.location.href = 'index.html';
}

function LoginOut() {
    $("#status").html("Logout...");
    setTimeout(ShowControls, 1000);
}