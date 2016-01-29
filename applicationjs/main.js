var apikey = '1234';
function ValidateLogin() {
    var email = $("#txtEmail").val();
    if (email == "") {
        $("#status").html("Email required.");
        return;
    }
    else {
        var clsName = $('#txtEmail').attr('class');
        if (clsName.indexOf("invalid") > 0)
        {
            $("#status").html("Email invalid.");
            return;
        }
    }
    $("#status").html("");
    var flexapi = new flexsecure(apikey);

    if (flexapi.userAuthenticate(email, "pin")) {
     
            $("#divPin").show();
            $("#divEmail").hide();
           
   }

}

function ValidatePin() {
    var flexapi = new flexsecure(apikey);
    $("#status").html("Processing please wait..");
    if (flexapi.systemAuthenticate()) {
        HideControls();
        setTimeout(LoginSuccess, 2000);
    }
    else
        LoginFailed();//default login page
}

function HideControls() {
    $("#divPin").hide();
    $("#divEmail").hide();
  
}

function ShowControls() {

    $("#divEmail").show();
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