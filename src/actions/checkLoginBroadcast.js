const checkLoginBroadcast = function (user) {
    
    console.log(user)
    return ({
        type: "LOGIN_CLICKED",
        payload: user
    })
}

export default checkLoginBroadcast;