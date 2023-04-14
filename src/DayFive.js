import { Fragment , useState} from "react";



export function CreateList(){
  const [list, setList] = useState("")
  const [add, setAdd] = useState([])
  

  function handleChange(event){
  setList(event.target.value)
  }

  function handleAdd(){
    setAdd([...add,list])
    setList("")
  }

return(
<Fragment>
<p>Get value: To-Do list</p>

<input type = "text" placeholder = "ENTER TASK" onChange = {handleChange} value={list}/>
&nbsp;<button onClick={handleAdd}><strong>Add</strong></button>
<ul>
  {
    add.map((ls,index)=> <li key={index}>{ls}</li>)
  }
</ul>
{/* <p>{add}</p> */}
</Fragment>


)}

// =====================================================================================================//


export function AddSubtract(){
const[num,setNum] = useState(0)

function Add(){
  setNum(num + 1)
  
}
function Substract(){
setNum(num - 1)
}

return(
  <Fragment>
      
 <p style={{color:"red" ,fontSize:40, textAlign:"center"}}>{num}</p>
 <p style={{textAlign:"center"}}><button onClick={Add}>Increase Count</button> &nbsp;&nbsp;
 <button onClick={Substract}>Decrease Count</button></p>
 


  </Fragment>
)}

//======================================================================================================//

export function ChangeName(){
const [name,setName] = useState(0)
       

function Change(){
setName(name+1)

}


return(
  <Fragment>
  <h1>My Name Is {name%2===0 ? "even" : "odd"} </h1>
  
  <button onClick={Change}>number is {name}</button>

  </Fragment>
)

}