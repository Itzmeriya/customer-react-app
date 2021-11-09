import React from 'react';
import { useContext } from 'react';
const themes = {
    light: {
      foreground: "#000000123",
      background: "#eeeeeefff",
      fontsize: 34
          },
    dark: {
      foreground: "white",
      background: "black",
      fontsize: 34
          }  };
  
  const ThemeContext = React.createContext(themes.light); 
  function ToolbarApp() {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>   
   );  
  }
  

function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
  
   const theme = useContext(ThemeContext);
   return (
     <button style={{ background: theme.background, color: theme.foreground, fontsize:theme.fontsize }}>
       I am styled by theme context!
     </button>
   );
  }
  
  export default ToolbarApp;
