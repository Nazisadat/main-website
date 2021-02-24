import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Banner from './components/banner/Banner';
import Footer from './containers/footer/footer';
import Header from './containers/header/Header';
import Routes from './routes/routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Banner></Banner>
      <Routes></Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
