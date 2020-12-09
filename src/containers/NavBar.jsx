import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})`
    position: static;
    height : 140px;
    // width:2000px;
    // width: 25%;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-top: 0px; 
    height: 80px;
    min-height: 50px;
    max-height: 300px;
    margin-bottom: 500 px;
    // background-color: #e3f2fd;
    box-shadow: 0 .5rem .5rem rgb(20, 20, 31);
    // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`


class NavBar extends Component {
    render() {
        return (
            // <Container>
                 <Nav>
                     <Logo />
                     <Links />
                 </Nav>
                
            // </Container>   
        )
    }
}

export default NavBar