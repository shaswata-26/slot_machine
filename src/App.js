import React from "react";
import "./App.css"

const SlotM=(props)=>{
  // let x='😄';
  // let y='😄';
  // let z='😄';
  if((props.x===props.y)&&(props.y===props.z)){
    return(
      <>
        <div className="inn">
            <h1>
              {props.x}{props.y}{props.z}
            </h1>
            <hr/>
            <h1>This is matching</h1>
        </div>
      </>
    )
  }
  else{
    return(
      <>
        <div className="inn">
            <h1>
              {props.x}{props.y}{props.z}
            </h1>
            <hr/>
            <h1>This is Not  matching</h1>
        </div>
      </>
    )
  }
}

const App=()=>{

return <>
  <div className="head">
         <h1>🎰 Welcome to <span style={{fontWeight:100}}>slot machine</span></h1>
         <div className="inns">
    <SlotM x='😄'  y='😄' z='😄'/>
    <SlotM x='😄' y='😸' z='♐'/>
    <SlotM x='😈' y='🛩️' z='🈂️'/>
  </div>
  </div>
 
  
</>

}

export default App;

