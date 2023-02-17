import { useEffect, useState } from "react";
import Exmple from './Components/exmple';



function App() {
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    if(theme==="dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTimerSwitch = () =>{
    setTheme(theme==="dark" ? "light" : "dark");
  }
  
  return (
    <div className="h-screen bg-white dark:bg-black flex justify-center items-center">
      <div>
      <button onClick={handleTimerSwitch} className="dark:bg-green-200 bg-pink-200 p-4 rounded-3xl">{theme==="dark" ? "Light" : "Dark" } Mode</button>
      
      <Exmple/>
      </div>
    </div>
  );
}

export default App;
