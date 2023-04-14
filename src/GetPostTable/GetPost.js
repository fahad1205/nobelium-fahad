import { useEffect, useState } from "react";

import styles from  './GetPost.module.css'


export function PostsTable() {
  
  const[posts , setPosts] = useState([]);

  useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) 
  .then((data) => setPosts(data))  
  .catch((err) => console.log(err));
    
  },[])

  function handleRemove(id) {
    fetch("https://jsonplaceholder.typicode.com/posts/${id}", {
     method: 'DELETE',
  })
    .then( () => setPosts(posts.filter( post => post.id !== id )))
    .catch((err) => console.log(err));

  }



  return(
    <div className={styles.container}>
    {
      posts.map((post)=>(
        <div className={styles.postcoloumn} key={post.id}>
          <h2 className={styles.title} > {post.title}</h2>
          <p className= {styles.body} > {post.body} </p>
          <button className= {styles.deletebutton} onClick={() => handleRemove(post.id)}> REMOVE </button>
        </div>
      ))
    }

    </div>
  )

}