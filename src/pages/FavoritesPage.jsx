import { Helmet, HelmetProvider } from 'react-helmet-async';

// import Loader from '../../components/Loader/Loader';

export default function FavoritesPage() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>FavoritesPage</title>
        </Helmet>

        {/* <div className={css.wrapContacts}>
          <SearchBox />
          <ContactList />
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
        </div> */}
      </HelmetProvider>
    </>
  );
}
