import { Fragment } from "react";

export function UserOne(props) {
  return(
    <Fragment>
      <img src ={props.picture} alt="User" title="profile picture" width="80" height= "50" />
      <h3>{props.designation}</h3>
      <h1>{props.name}</h1>
      <p>{props.description}</p>

    </Fragment>
    
  )
}



  export function UserTwo(props){
    return(
      <Fragment>
        <center><img src ={props.picture} alt="User" title="profile picture"  /></center>
        <h3>{props.designation}</h3>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
  
      </Fragment>
      
    )
      
    }
  // function Image(){
  //   console.log("hellllloo")
  //   // return( 
  //   //   <Fragment>
  //   // {/* <img src=
  //   // "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  //   //     width="80" height= "50"
  //   //    alt="User" title="profile picture" /> */}
  //   //    <h1>oyeeeeee</h1>
  //   //   </Fragment>   
  //   // ) 
  // }
