function fakeFS()
{
    var endAddress = "api.flexsecure.co/v1";
    var apiKey = "BqPEHPILTgfTxEID";

    this.userAuthenticate = function ()
    {
        return {
            "success": "user authentication process started",
            "mode": "pin"
        }

      //return  {
      //      "success": "user authentication process started",
      //      "mode":"passwordless"
      //  }
    };

    this.systemAuthenticate = function () {
      
        return{
            error: "failed security check"
        }
    };

    this.userAll = function () {
        $.ajax({
            url: endAddress + "/user/all",
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("apikey", apiKey);
            },
            success: function (response) {
                console.log(response);
            },
            error: function (data, errorThrown) {
                console.log("error:" + errorThrown);
        }
        });

    };

    this.systemPoll = function () {
        return
        {
            error: "not found"
        }

    };
}