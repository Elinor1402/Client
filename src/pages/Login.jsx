import React, { Component } from 'react'
import api from '../api'
import { loginAction } from '../actions/usersActions';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

class Login extends Component {
   
    componentDidUpdate(_props,_state)
    {
        if(this.props.isLogged != _props.isLogged) {
            console.log("hello")
            this.props.history.push('/');
        }
    }
    handlerLogin = (username,password) => {
        this.props.login(username,password);
        // this.props.history.push('/');
    } 
   
    render() {
        return (
            <LoginForm handlerLogin={this.handlerLogin} />
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.usersReducer.isLogged
    }
}

const mapDispatchToProps = disaptch => {
    return {
        login: (username,password) => {
            disaptch(loginAction(username,password));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
