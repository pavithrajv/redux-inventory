import React from 'react';
import { Link } from 'react-router-dom';

import './login.css'
import Header from '../header/header';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import checkLoginBroadcast from '../../actions/checkLoginBroadcast';
let usersresp='';
class LoginComponent extends React.Component {
    state = {
        uname: '',
        pwd: '',
        
        msgResponse: '',
        pwdResponse: ''
    }
    getUname = (event) => {
        console.log(event.target.value)
        this.setState({ uname: event.target.value })
    }

    getPwd = (event) => {
        console.log(event.target.value)
        this.setState({ pwd: event.target.value })
    }
    // componentDidMount() {
    //     this.checkLogin()
    // }

    checkLogin = () => {
        console.log("check login rendered..")
        let user={
            "userid":this.state.uname,
            "pwd":this.state.pwd
        }
        this.props.checkLogin(user)
        console.log(usersresp)
        this.setState({msgResponse:usersresp})
        if(usersresp == "login success"){
            console.log("***")
            this.props.history.push('/products')
        }
                
    }

    render() {
        return (
            <div>
                <Header></Header>
            <div id="loginbox">
                <center><b>LOGIN HERE.!!</b></center>
                <form style={{ marginTop: "30px" }}>
                    <p>Username</p>
                    <input type="text" id="uname" onChange={this.getUname} placeholder="Enter username"></input><br></br>
                    <p>Password</p>
                    <input type="password" id="pwd" onChange={this.getPwd} placeholder="enter password"></input><br></br>
                    <button onClick={this.checkLogin} id="login" >Login</button><span style={{ color: "red", marginLeft: "20px" }}>{this.state.msgResponse}</span>
                    {/* <span style={{ color: "red",marginLeft:"20px" }}>{this.state.pwdResponse}</span> */}
                    <br></br><br></br>
                    <Link to='/register' id="reg">Don't have an account?,signup here</Link>

                </form>
                </div>
            </div>
        );
    }
}

function convertStoreToProps(store) {
    console.log('Received complete store....in allproducts container');
    console.log(store);
    console.log(store.allusers)
    usersresp=store.allusers
    //Identify the data from store which allproducts container can consume.
    //it will consume extracted data as props!!!!

    return {
        users: store.allusers
    }
}

function recieveLoginAndDispatch(dispatch) {
    return bindActionCreators({
        checkLogin:checkLoginBroadcast
    }, dispatch);
}


export default connect(convertStoreToProps, recieveLoginAndDispatch)(LoginComponent);