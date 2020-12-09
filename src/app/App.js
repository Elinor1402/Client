import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../containers'
import {UsersRegister,Login,UsersList,UsersUpdate} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

import {connect} from 'react-redux'
import PrivateRoute from '../containers/PrivateRoute';
// import {Title} from '../style/styleapp'
// import DropDown from '../containers/DropdownNav'

class App extends Component {

    render()
    {
        return (
            <div >
            <Router>
                <NavBar />
                <Switch>     
                    {/* <Route exact path="/" component={Main}/>         */}
                     <Route path="/users/login"exact component={Login}/>
                    <PrivateRoute path="/users/register"exact component={UsersRegister}/>
                    <PrivateRoute path="/users/list" exact component={UsersList} /> 
                    <PrivateRoute path="/users/update/:id"exact component={UsersUpdate}/>
                </Switch>
            </Router>
           {/* <DropDown/> */}
            </div>
           
            )
    }
}
const mapStateToProps= state => {
    return{
        isLogged: state.usersReducer.isLogged
    }
}
const mapDispatchToProps = dispatch =>{
    return {      
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(App);