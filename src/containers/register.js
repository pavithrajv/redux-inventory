import React from 'react';

import { Link } from 'react-router-dom';
import './register.css'
import Header from './header';

class RegisterComponent extends React.Component {

    state = {
        name: '',
        email: '',
        uid: '',
        pwd: '',
        mobile:0,
        nameError: '',
        emailError: '',
        useridError: '',
        pwdError: '',
        mobileError: '',
        buttonStatus: true


    }


    getName = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ name: event.target.value })
        this.checkValidation()


    }


    getEmail = (event) => {
        this.setState({ email: event.target.value })
        this.checkValidation()
    }


    getUserId = (event) => {
        this.setState({ uid: event.target.value })
        this.checkValidation()
    }
    getPwd = (event) => {
        console.log(event.target.value)
        this.setState({ pwd: event.target.value })
        this.checkValidation()
    }


    getMobile = (event) => {
        console.log(event.target.value)
        this.setState({ mobile: event.target.value })
        this.checkValidation()
    }


    checkValidation = () => {


        if (this.state.name == "" || this.state.name.length < 4) {
            this.setState({ nameError: "please enter valid name", buttonStatus: true })
        }
        else {
            this.setState({ nameError: '', buttonStatus: false })
        }
        if (this.state.email == "" || !this.state.email.match('@gmail.com')) {
            this.setState({ emailError: 'please enter valid email', buttonStatus: true })
        }
        else {
            this.setState({ emailError: '', buttonStatus: false })
        }
        if (this.state.uid == "" || this.state.uid.length < 4) {
            this.setState({ useridError: 'please enter valid userid', buttonStatus: true })
        }
        else {
            this.setState({ useridError: '', buttonStatus: false })
        }
        if (this.state.pwd == '' || this.state.pwd.length <= 4) {
            this.setState({ pwdError: "please enter valid password", buttonStatus: true })
        }
        else {
            this.setState({ pwdError: '', buttonStatus: false })
        }
        // if (this.state.cpwd == '' || this.state.cpwd != this.state.pwd) {
        //     this.setState({ cpwdError: 'Enter the same password again',buttonStatus:true })
        // }
        // else if(this.state.cpwdError == "Enter the same password again"){
        //     this.setState({buttonStatus:true})
        // }
        // else {
        //     this.setState({ cpwdError: '', buttonStatus: false })
        // }
        if(this.state.mobile.length != 10){
            this.setState({mobileError:"please enter valid mobile number",buttonStatus:true})
        }
        else{
            this.setState({mobileError:'',buttonStatus:false})
        }



    }


    saveUser = () => {
        console.log("save user rendered..")


        let userDetails = {
            "id": this.state.uid,
            "name": this.state.name,
            "email": this.state.email,
            "userid": this.state.uid,
            "pwd": this.state.pwd,
            "mobile":this.state.mobile
        }
        console.log("userDetails:", userDetails)
        this.checkValidation()
        console.log(this.state.pwdError)
    }


    render() {
        return (
            <div>
                <Header></Header>
            
            <div id="registerbox">
                <h2>REGISTER HERE.!!</h2>
                <form>
                    <p>Name </p>
                    <input type='text' id="name" onChange={this.getName} required></input><span >{this.state.nameError}</span>
                    <br></br>
                    <p>Emailid </p>
                    <input type='text' id="email" onChange={this.getEmail} required></input><span >{this.state.emailError}</span>
                    <br></br>
                    <p>UserName</p>
                    <input type="text" id="uid" onChange={this.getUserId} required></input><span >{this.state.useridError}</span>
                    <br></br>
                    <p>Password</p>
                    <input type="password" id="pwd" onChange={this.getPwd} required></input><span >{this.state.pwdError}</span>
                    <br></br>
                    <p>Mobile.No</p>
                    <input type="number" id="mobile" onChange={this.getMobile} required></input><span >{this.state.mobileError}</span>
                    <br></br><br></br>
                    <button id="save" onClick={this.saveUser} disabled={this.state.buttonStatus} style={{ backgroundcolor: 'white', color: ' black', border: '2px solid #008CBA' }}>SignUp</button>
                    <br></br><br></br>
                    <Link to='/login' id="reg">Already a member,login here..</Link>
                </form>
            </div>
            </div>
        );
    }

}

export default RegisterComponent;