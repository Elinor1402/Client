import React, {Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { logoutAction } from '../actions/usersActions';
import DropDown from './DropdownNav'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const StyledLink = styled(Link)`
  color: lightblue;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;

&:hover {
  text-decoration: underline;
  color: white
}
&.active {
  color: black;
}
`;

class Links extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dropdown: true,
            click: false,
        }
    }
    closeMobileMenu = () => 
    {
        this.setState({click:false})
    } 
    render() {
        let loginLink =   <Link to="/users/login" className="nav-link" > התחברות</Link> 
        if(this.props.isLogged === true) {
        loginLink =  <Link to="/users/login" className="nav-link" onClick={this.handlerLogout}>יציאה</Link>
        }
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                   דף ראשי
                </Link>
                <Collapse>
                    <List>
                    <Item>
                    {loginLink}
                    </Item>
                    <Item>
                        <Link to="/users/register" className="nav-link">
                               הרשמה לאתר
                         </Link>
                    </Item>

                        <Item>
                            <Link to="/users/list" className="nav-link">
                                רשימת משתמשים
                            </Link>
                        </Item>
                        <Item>
                        <StyledLink>צוות ממשקים וקישוריות</StyledLink>
                        </Item>

                        <Item>      
                            <DropDown/>
                        </Item> 

                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
    handlerLogout = () => {
        this.props.logout();
      }
}
const mapStateToProps = state => {
    return {
        isLogged: state.usersReducer.isLogged
    }
}

const mapDispatchToProps = disaptch => {
    return {
        logout() {
            disaptch(logoutAction());
          }
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Links)