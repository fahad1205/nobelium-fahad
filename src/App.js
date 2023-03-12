// import logo from './logo.svg';
import './App.css';
// import {Component1,Component2,Component3} from "./Components";
import {Fragment} from "react"

import { UserOne, UserTwo} from "./DayFour"

function App() {
  
  const picture = "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const name = "Amit";
  const designation = "Graphic Designer";
  const description = <p>Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.</p>

  const picture2 = "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  const name2 = "Ruhi";

  const designation2 = "Singer";
  const description2 = <p>Perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays,and other types of music groups.</p>
  return (
  <Fragment> 
 
  <UserOne picture={picture} name={name} designation={designation} description={description}/>
 {/* <div class = "comp"> <UserTwo picture={picture2} name={name2} designaiption={description2}/> </div> */}
 </Fragment> 
  );
}

export default App;
