
function ValidateLogin() {
    var email = $("#txtEmail").val();
    var apikey = '1234';
    
    var flexapi = new flexsecure(apikey);

    if (flexapi.userAuthenticate(email, "pin")) {
        if ($("#btnLogin").text() == "Next") {
            $("#divPin").show();
            $("#divEmail").hide();
            $("#btnLogin").text("Login");
        }
        else {
            $("#status").html("Processing please wait..");
            if (flexapi.systemAuthenticate()) {
                HideControls();
                setTimeout(LoginSuccess, 2000);
            }
            else
                LoginFailed();//default login page
        }
    }

}

function HideControls() {
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