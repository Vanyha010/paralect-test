import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainPage from '../../pages/mainPage';
import Layout from '../layout/layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="movies" element={<MainPage />} />
        </Route>
    )
);

export default router;
