
// import logo from './logo.svg';
// import './App.css';
import {Fragment, useRef} from "react"
import { TodoList } from "./day6/DaySix";
// import { Browser } from "./Figma-css/browser";
import { Scroller } from "./scroller/Scroller";
import BillingForm from "./Form/Form";
import { RecoilRoot } from "recoil";

import { DataProvider } from "./AssignmentCon/DataProvider";
import { List , Details } from "./AssignmentCon/AssignmentCom";


function App() {
  
  return (
    <Fragment>
      

      <DataProvider>
      <div>
        <div style={{ float: 'left', width: '50%' }}>
          <List />
        </div>
        <div style={{ float: 'left', width: '50%' }}>
          <Details />
        </div>
      </div>
    </DataProvider>

   
    </Fragment>
    
  );
}

export default App;
