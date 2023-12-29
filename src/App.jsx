import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import Card from './component/Card';
import Page from './pages/Page';
function App() 
{
  return (
    <div className='App'>
      {/* <Page/> */}
       <Card/>
    </div>
  );
}


export default App;
