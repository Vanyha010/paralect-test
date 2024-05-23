import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainPage from '../../pages/mainPage/mainPage';
import Layout from '../layout/layout';
import RatedMoviesPage from '../../pages/ratedMoviesPage/ratedMoviesPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="movies" element={<MainPage />} />
            <Route path="rated" element={<RatedMoviesPage />} />
        </Route>
    )
);

export default router;
