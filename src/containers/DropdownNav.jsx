import React, { Component} from "react";
import {MenuItems} from '../components/MenuItems'
import {Link} from 'react-router-dom';
import styled from "styled-components";
import  '../style/Dropdown.css'

const Main = styled("div")`
  font-family: Helvetica, Arial, sans-serif;
//   font-size: 20px;
  height: 7vh;
`;

const DropDownContainer = styled("div")`
  width: 6.0em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
   padding: 0.4em 2em 0.4em 1em;
  font-weight: 100;
  font-size: 1.0rem;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: relative;
  z-index: 1;
  padding: 0;
  margin: 0;
  background-color: #383838;
  box-sizing: border-box;
  color:  #00b8e6;
  font-size: 1.0rem;
  font-weight: 100;

`;

const Heading = styled.i.attrs({
    className: `fa fa-caret-down`,
})`
    font-size:20px;
    color:darkgrey;
`

class DropDown extends Component
{
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            selectedOption: 'פעולות',
        }
    }
    
toggling = () => 
{
    if(this.state.isOpen)
    this.setState({isOpen:false});  
    else
    this.setState({isOpen:true})
} 
onOptionClicked = value => () => {
    this.setState({selectedOption:value})
    this.setState({isOpen:false}); 
    // console.log(selectedOption);
  };   
render() 
{ 
    const {isOpen,selectedOption}=this.state;
    return (
        <Main>
      <DropDownContainer>
        <DropDownHeader onMouseOver={this.toggling}>
          {<Heading>{selectedOption}</Heading>}
          {/* <i className='fas fa-caret-down' /> */}
          
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {MenuItems.map(option => (
                  
                // <ListItem onClick={this.onOptionClicked(option)} key={Math.random()}>
                //   {option.title}
                    // key={Math.random()}
                  <Link to={option.path} className={option.cName} onClick={this.onOptionClicked(option.title)}>  {option.title}
                  </Link>
                // </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
      
        );
    }
} 
export default DropDown;            


