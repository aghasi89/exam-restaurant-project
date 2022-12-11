import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Topbar from './Components/Topbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { LanguageContext } from './Contexts';
import { useState } from 'react';
import Languages from './Contexts/Languages';



function App() {
  const [lng,setlng]= useState(Languages.en)
    return (
    <LanguageContext.Provider value ={ lng }>
      <div className="App">
        <Topbar changeLanguage = {setlng} />         
        <Main />    
      </div>    
    </LanguageContext.Provider>    
  );
}

export default App;
