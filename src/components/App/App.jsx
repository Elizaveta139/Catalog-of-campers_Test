import { Suspense, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import { refreshUser } from '../../redux/auth/operations';
// import { PrivateRoute } from '../PrivateRoute';
// import { RestrictedRoute } from '../RestrictedRoute';
// import { useAuth } from '../../hooks';
import css from './App.module.css';

// import Layout from '../Layout/Layout';
// import NotFound from '../../pages/NotFound';
import Loader from '../Loader/Loader';
import AppBar from '../AppBar/AppBar';

const HomePage = lazy(() => import('../../pages/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage'));

export default function App() {
  //   const dispatch = useDispatch();
  //   const { isRefreshing } = useAuth();
  //   // const isLoading = useSelector(selectIsLoading);
  //   // const error = useSelector(selectError);

  //   useEffect(() => {
  //     dispatch(refreshUser());
  //   }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <AppBar />
        <Suspense fallback={<Loader onLoading={true} />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
