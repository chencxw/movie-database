// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourite from '../pages/PageFavourite';
import PageIndividualMovie from '../pages/PageIndividualMovie';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
            <Routes>
                <Route path="/" exact element={<PageHome/>}  />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/favourites" element={<PageFavourite />} />
                <Route path="/movie/:id" element={<PageIndividualMovie/>} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;