// // Create a simple React app with React Router. Set up two routes: 
// // one for the home page and one for a contact page. 
// // Use React Router's Link component to navigate between the two pages.
// import { BrowserRouter as Router , Route , Link } from "react-router-dom";

// export function Main() {
  
//   return(
//     <Router>
//     <div>
//      <nav>
//       <ul>
//         <li>
//           <Link to="/" >HOME</Link>
//         </li>
//         <li>
//           <Link to="/contact" >CONTACT</Link>
//         </li>
//       </ul>
//      </nav>

//     <Route path="/" Component = {HomePage} />
//     <Route path="/contact" Component = {ContactPage} />

//    </div>

//     </Router>
//   )
// }


// function HomePage() {

//   return(
//   <>
//   <div>
//     <h1>HomePage</h1>
//   </div>

//   </>
//   )}

//   function ContactPage() {

//   return(
//   <>
//   <div>
//     <h1>ContactPage</h1>
//   </div>

//   </>
//   )}
