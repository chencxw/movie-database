// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { APP_FOLDER_NAME } from "../globals/globals";

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourite from '../pages/PageFavourite';
import PageIndividualMovie from '../pages/PageIndividualMovie';
import PageNotFound from '../pages/PageNotFound';
import PageSearch from '../pages/PageSearch';

function AppRouter() {
  return (
    <BrowserRouter basename={`/${APP_FOLDER_NAME}`} >
      <div className="wrapper">
        <Header/>
            <Routes>
                <Route path="/" exact element={<PageHome/>}  />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/favourites" element={<PageFavourite />} />
                <Route path="/search/:userInput" element={<PageSearch />} />
                <Route path="/movie/:id" element={<PageIndividualMovie/>} />
                <Route path="/sort/popular" element={<PageHome sort="popular" />}  />
                <Route path="/sort/top-rated" element={<PageHome sort="top_rated" />}  />
                <Route path="/sort/now-playing" element={<PageHome sort="now_playing" />}  />
                <Route path="/sort/upcoming" element={<PageHome sort="upcoming" />}  />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;