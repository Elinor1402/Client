
import React, { Component } from 'react'
import styled from 'styled-components'

// import logo from '../logo.svg'
import Logoimg from '../images/work3.svg';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

// const Logo = styled.img`
//   border: 1px solid #000;
//   background-image: url(${Logoimg});
// `;


class Logo extends Component {
    render() {
        return (
            <Wrapper href="http://localhost:4000/">
                <img src={Logoimg} width="100" height="50" alt="sambarros.com" />
            </Wrapper>
        )
    }
}

export default Logo