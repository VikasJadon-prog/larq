import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './component/Card';
// import Page from './pages/Page';
import Header from './component/Header';
// import Child from './component/Child';
// import ProdDes from './pages/ProdDes';
// import Cart from './component/Cart';
// import Child from './component/Child';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>

      <Header />
      <Routes>
        {/* <Route path='/page'  exact element={<Page />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/prodDes" element={<ProdDes />} /> */}
        <Route path='/card' element={<Card />} />
      </Routes>
      <Card/>   

      {/* <Child />
 */}

    </div>
  );
}


export default App;
