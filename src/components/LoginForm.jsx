import React, { Component } from 'react';

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    position: relative;
    width:400px;
    left:400px;
    top: 40px;
    padding:20px;
`

const Label = styled.label`
`

const InputText = styled.input.attrs({
    className: 'form-control',
})` 
    padding:10px;
    margin: 0px 0px 15px 5px; 
    box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    position: absolute;
    top: 120%;
    left: 40%;
    transform: translate(-50%, -50%);
    margin: 15px 15px 15px 5px; 
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    position: absolute;
    top: 120%;
    left: 60%;
    transform: translate(-50%, -50%);
    margin: 15px 15px 15px 5px; 
`
class LoginForm extends Component {
    constructor(props) {
        super();

        this.state = {
           
            username: '',
            password: '',
            
        }
    }
    
    handleChangeInputUsername = async event => {
        const username = event.target.value
        this.setState({ username })
    }

    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleLoginUser = async () => {
        this.props.handlerLogin(this.state.username,this.state.password);
    }

    render() {
        const { username, password} = this.state
        return (
            <Wrapper>
            <Title>התחברות</Title>
            <Label>:שם משתמש</Label>
            <InputText
                type="text"
                value={username}
                onChange={this.handleChangeInputUsername}
            />

            <Label>:סיסמא</Label>
            <InputText
                 type="password"
                 value={password}
                onChange={this.handleChangeInputPassword}
            />

            <Button onClick={this.handleLoginUser}>התחבר</Button>
            <CancelButton href={'/'}>ביטול</CancelButton>
            {/* <p className="grey-text text-darken-1">
            Don't have an account? <Link to="/users/register">Register</Link>
          </p> */}
        </Wrapper>
            
        )
    }
}


export default LoginForm;