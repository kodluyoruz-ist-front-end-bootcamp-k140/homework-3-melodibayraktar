import React, { createContext, useState } from 'react';
import './App.css';
import ReactSwitch from "react-switch";
// import other from './Other.module.css'; .module is important!
// import { TitleClassComponent, TitleFnComponent } from "./components/title"

import { DataGrid, DataGridClsComponent } from './components/data-grid';
import { Header } from './components/header';
import { Button } from "./components/button";


export const ThemeContext = createContext(null);


function App() {
  
  const [activeTab, setActiveTab] = useState("fn")
  const [theme,setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr ==="light"? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className="App" id={theme}>
        <Header/>
        <span className='switch'>
          <label>{theme ==="light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme ==="dark"}/></span>
        <div className='container'>
          <div className="btn-group tabs" role="group" ariaLabel="Basic example">
            <Button onClick={() => setActiveTab("cls")} className={activeTab === "cls" ? "btn btn-primary" : "btn btn-default"}>Class Component</Button>
            <Button onClick={() => setActiveTab("fn")} className={activeTab === "fn" ? "btn btn-primary" : "btn btn-default"}>Fn Component</Button>
          </div>
          <br />
          { activeTab == "fn" ? <DataGrid /> : <DataGridClsComponent />}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}




export default App;