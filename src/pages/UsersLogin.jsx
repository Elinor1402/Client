import React, { Component } from 'react'
import api from '../api'
import { Link} from "react-router-dom";

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class UsersLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isLoading: false,
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
        const { username, password} = this.state
        const payload = { username, password}

        await api.LoginUser(payload).then(res => {
            // window.location.href = `/users/register`
            window.alert(`Login successfully`)
            this.setState({
                username: '',
                password: '',  
                isLoading: true,      
            })
            window.location.href = `/users/manage`
        })
        .catch(error => {  
            var response =JSON.stringify(error.response.data.message)
            //רק לא עובד שזה קשןר לבדיקת שדות אם יש משתמש הכל יעבוד
            window.alert(response+ " status: "+error.response.status);             
        })
    }

    render() {
        const { username, password,isLoading} = this.state
        return (
            <Wrapper>
                <Title>Login</Title>

                <Label>Username: </Label>
                <InputText
                    type="text"
                    value={username}
                    onChange={this.handleChangeInputUsername}
                />

                <Label>Password: </Label>
                <InputText
                     type="password"
                     value={password}
                    onChange={this.handleChangeInputPassword}
                />

                <Button onClick={this.handleLoginUser}>Login</Button>
                <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/users/register">Register</Link>
              </p>
            </Wrapper>
        )
    }
}

export default UsersLogin