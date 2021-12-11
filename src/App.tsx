import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './static/scss/style.scss';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './component/header/header';
import { MyCarousel } from './component/carousel/carousel';
import { ContentContainer } from './component/contentContainer/contentContainer';
import { CarouselProvider } from './context/carouselContext';

function App() {
  return (
    <CarouselProvider>
      <Router>
        <Header />
        <ContentContainer>
          <MyCarousel />
          <Routes>
            <Route />
          </Routes>
        </ContentContainer>
      </Router>
    </CarouselProvider>
  );
}

export default App;
