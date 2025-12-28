import styles from "./App.module.css"
import Inputs from "./Inputs";
import Buttons from "./Buttons";
import { useState } from "react";

const App = () => {
  const [display,setDisplay] = useState("");

  const buttonHandler = (btn)=>{
    if(btn === "C"){
      setDisplay("")
    }
    else if (btn === "="){
      setDisplay(eval(display))
    }
    else{
      setDisplay(display + btn )
    }
  }
  return (
    <div className={styles.content}>
    <div className={styles.calculator}>
      <Inputs Dplay = {display}/>
      <Buttons button={buttonHandler}/>
    </div>
    </div>
  );
};

export default App;
