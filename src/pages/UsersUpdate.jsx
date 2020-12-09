import React, { Component } from 'react'
import api from '../api'

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

class UsersUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            username: this.props.match.params.username,
            password: '',          
        }
    }

    // handleChangeInputUsername = async event => {
    //     const username = event.target.value
    //     this.setState({ username })
    // }

    handleChangeInputPassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleUpdateUser = async () => {
        const { id, username, password} = this.state
        const payload = { username, password}

        await api.updateUserById(id, payload).then(res => {
            window.alert(res.data.message+ " status: "+res.status) 
            this.setState({
                username: '',
                password: '',
            })
        })
        .catch(error => {  
            var response =JSON.stringify(error.response.data.message)
            //רק לא עובד שזה קשןר לבדיקת שדות אם יש משתמש הכל יעבוד
            window.alert(response+ " status: "+error.response.status);
                  
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const user = await api.getUserById(id)

        this.setState({
            username: user.data.data.username,
            password: user.data.data.password,
        })
    }

    render() {
        const { username, password} = this.state
        return (
            <Wrapper>
                <Title>Update User</Title>

                <Label>Username: </Label>
                {/* <InputText
                    type="text"
                    value={username}
                    // onChange={this.handleChangeInputUsername}
                /> */}
                <p>{username}</p>

                <Label>Password: </Label>
                <InputText
                    // type="number"
                    // step="0.1"
                    // lang="en-US"
                    // min="0"
                    // max="10"
                    // pattern="[0-9]+([,\.][0-9]+)?"
                    type="text"
                    value={password}
                    onChange={this.handleChangeInputPassword}
                />

                <Button onClick={this.handleUpdateUser}>Update User</Button>
                <CancelButton href={'/users/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default UsersUpdate