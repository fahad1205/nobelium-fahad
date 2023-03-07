export function Component1(props){
  return(
    <h1>
        &nbsp;&nbsp;&nbsp;{props.head}
    </h1>
  )
  }
  
  export function Component2(){
  return(
      <fragment>
    
     &nbsp; &nbsp; &nbsp; &nbsp;  <input type="text" placeholder="mobile ..."></input>
     <br></br>
     <br></br>
     &nbsp; &nbsp; &nbsp; &nbsp;  <input type="text" placeholder="password ..."></input>
       
      </fragment>
)}
  
  export function Component3(props){
  return(
    <fragment>
    <br></br>
    <br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{props.button}
     </fragment>
  )
  }