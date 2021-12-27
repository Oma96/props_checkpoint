
import PropTypes from "prop-types";
import React from "react";
import { Button } from 'react-bootstrap';



const Component =props=>{
 return (
    <>
  <h1> {props.fullName}</h1>
  <h1> {props.bio}</h1>
  <h1> {props.profession}</h1>
  <h1>{props.children}</h1>
   < Button variant="primary" onClick={()=>props.handleName(props.fullName)} > 
     ClickMe
   </Button>  

  
   </>
)
}
Component.defaultProps={
    fullName:"Fullname: Oumaima",
    bio:"Bio: Biologist interested in computer science",
    profession:" Profession: None"

}
Component.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
    
  };

export default Component