import ProgressBar from "./ProgressBar.jsx"
import {useState} from "react"


function App(){
  const [progress,setProgress] = useState(0)
  const [setMouseHovered] = useState(false)
  function updateProgress(){
    if(progress >= 0 && progress < 100 ){
      setProgress(progress+10)
    }
    else {
      setProgress(0)
    }
    
  }
  function GoingMouseEnter() {
    setMouseHovered(true);
  }

  function GoingMouseLeave() {
    setMouseHovered(false);
  }
  return(
  <>
  <div className="centered"><ProgressBar progress={progress}/>
  <button onMouseEnter={GoingMouseEnter} onMouseLeave={GoingMouseLeave} onClick={updateProgress}>Update Progress</button></div></>)
}

export default App
