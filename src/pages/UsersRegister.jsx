import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'
// let errors={}

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
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
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

class UsersRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            password2: '', 
            
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

    handleChangeInputPassword2 = async event => {
        const password2 = event.target.value
        this.setState({ password2 })
    }
    handleRegisterUser = async () => {
        const { username, password, password2} = this.state
        const payload = { username, password,password2}
        
        await api.registerUser(payload)
        .then(res => {
           
             window.alert(res.data.message+ " status: "+res.status)  
            this.setState({
                username: '',
                password: '', 
                password2: '',  
                
            })
           
        })
        .catch(error => {  
            var response =JSON.stringify(error.response.data.message)
            //רק לא עובד שזה קשןר לבדיקת שדות אם יש משתמש הכל יעבוד
            window.alert(response+ " status: "+error.response.status);
                  
        })
    }

    render() {
        const { username, password, password2} = this.state
        return (
            <Wrapper>
                <Title>הרשמה</Title>

                <Label>:שם משתמש</Label>
                <InputText
                    type="text"
                    value={username}
                   
                    id="username"
                    // type="username"
                    onChange={this.handleChangeInputUsername}
                />

                <Label>:ססמא</Label>
                <InputText
                     type="password"
                     value={password}
                    
                     id="password"
                    onChange={this.handleChangeInputPassword}
                />
                <Label>:אישור סיסמא</Label>
                <InputText
                     type="password"
                     value={password2}
                    
                     id="password2"
                    onChange={this.handleChangeInputPassword2}
                />

                <Button onClick={this.handleRegisterUser}>הרשם</Button>
                <CancelButton href={'/users/list'}>ביטול</CancelButton>
            </Wrapper>
        )
    }
}

export default UsersRegister