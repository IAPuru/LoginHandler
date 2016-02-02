function flexsecure(key) {
   
    this.apikey = key;
    console.log('Flexsecure sdk instantiated');
    
    this.userAuthenticate = function (email, system) {
        console.log('UserAuthenticate called');
        
        //result = this.helper.restPost("/user/authenticate", { "email": email, "system": system } )

        // raise event for result

        return true;        
    };

    this.systemAuthenticate = function (email, system, mode) {
        console.log('SystemAuthenticate called');
        return true;
    };

    var eListener = new EventListener();

    eListener.on("timeout", function () {
        console.log(" timeout listener called.");
    });

   
    this.systemPoll = function () {
        var counter = setInterval(timer, 1000);
        //setup timer for 10 sec
        // raise event Passwordless
        // polling every 1 second,
        // - restPost URL= "/system/poll", body email, system
        // - 1. 60% false, - no response yet
        // - 2. 10% true - "Refused"
        // - 3. 30% true - "Approved"
        // - 4. if no true result by end of 10 sec timer, retrun false
        //  -- stop timer, rasie event timeout..

        // stop timer
        // rasie event on true condition  
        
        return true;
    };

    var count = 10;

    function pollMe()
    {
        var num = Math.random();
        if (num < 0.2) return true;
        else if (num < 0.4) return true;
        else if (num < 0.9) return false; 
        else return false; 
    }

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
             eListner.fire("timeout");
            //counter ended, do something here
            return;
        }

        pollMe();
        
    }

  //  this.helper.restPost (URL, BODY) {
        // retrn result of a post call using this.key in header
        // header: apikey: this.key, Content-Type: application/json

        // swicth/if logic agains URL

        // if URL is /user/authenticate fake response
        // - A (50%).  { "status": 200, "data": { "mode": "PIN" } }
        // - B (50%).  { "status": 200, "data": { "mode": "PASSWORDLESS" } }
        
    }




