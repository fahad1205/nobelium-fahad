import logo from './logo.svg';
// import './App.css';

export function Component1(){
return(
  <h1>I am heading one...from first component</h1>
)
}

export function Component2(){
return(
  <h2>I am heading two...from second component</h2>
)
}

export function Component3(){
return(
  <h3>I am heading three...from third component</h3>
)
}

export function Component4(){
return(
  <button >Click me 1</button>
)
}

function App() {
  return (
    <div className="App">
    {/* <Component1/>
    <Component2/>
    <Component3/>
    <Component4/> */}
      {/* <fragment>
      <h1>I am heading one...from first component</h1>
      <h2>I am heading two...from second component</h2>
      <h3>I am heading three...from third component</h3>
      <button >Click me 1</button>
      </fragment> */}
    </div>
  );
}

export default App;
