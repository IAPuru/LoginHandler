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

    this.systemPoll = function () {
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

  //  this.helper.restPost (URL, BODY) {
        // retrn result of a post call using this.key in header
        // header: apikey: this.key, Content-Type: application/json

        // swicth/if logic agains URL

        // if URL is /user/authenticate fake response
        // - A (50%).  { "status": 200, "data": { "mode": "PIN" } }
        // - B (50%).  { "status": 200, "data": { "mode": "PASSWORDLESS" } }
        
    }




