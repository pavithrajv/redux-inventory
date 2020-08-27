const allUsersReducer=function listAllUsers(state=null,action){
  
    var allusers= [
        {
          "id": "pavithra",
          "name": "test4",
          "email": "test4@gmail.com",
          "userid": "pavithra",
          "pwd": "test@123",
          "mobile":1234567890
        }
      ]
      let msgResponse='';
      switch (action.type) {
          case "LOGIN_CLICKED":
              console.log(action)
              console.log(action.payload)
              console.log(allusers)
              allusers.filter(user => {
                if (user.userid == action.payload.userid) {
                    if (user.pwd == action.payload.pwd) {
                        console.log("login success..!!")
                       msgResponse= "login success";
                       return msgResponse;
                        
                    }
                    else{
                      console.log("enter valid password")
                      msgResponse="enter valid password"
                      return msgResponse
                    }
                }
                else {
                    console.log("enter valid credentials..")
                    msgResponse= "enter valid credentials.." 
                    return msgResponse;
                }

            });
              console.log(msgResponse)
              return msgResponse;
            
          default:
              return allusers;
      }
}

export default allUsersReducer;