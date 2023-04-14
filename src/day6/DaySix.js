import { Fragment, useEffect, useRef, useState } from 'react';
import "./DaySix.css"

export function TodoList() {

  const [list , setList] = useState("")
  const [todo , setTodo] = useState([])
  const [count , setCount] = useState(0)
  const [clic , setClic] = useState(false)
  
  const textRef = useRef(null)
  const ref= useRef(null);



  useEffect(()=>{
     ref.current.focus()
  },[])
  
function handleChange(event) {
  setList(event.target.value)
}

function handleClick() {
  if(list !== '')
  setTodo([...todo,list]);
  setList("");
  // setCount(count +1)
}

function handleComplete(index) {
  
  // textRef.current.style.color = 'green'
}

function handleRemove(index){
//  const newList = todo.filter((item) => item.index !== index);
const updatedListData = todo.filter((elem , id)=> index !==id)
setTodo(updatedListData)
}


return(
  <>
  <div className='wrapper'>
  <div>   <h1 style={{color: "white" , padding: "10px" }}>Pending Task ({todo.length})</h1> </div> 

     {todo!==[] && todo.map((ls,index)=>
    
      <h5 ref={textRef} key={index}>
      {ls}&nbsp;&nbsp;
    
     <span> <button className='complete' onClick={() => handleComplete(index)} >complete</button> &nbsp;&nbsp;
     <button type="button" onClick={() => handleRemove(index)}>X</button> </span> </h5> 
     )}

  <input  type='text' placeholder='Add new task' value={list} onChange = {handleChange} ref={ref}/><br/>
  <button className='add' onClick={handleClick}><strong>ADD TASK</strong></button>
</div>  
</>
)}