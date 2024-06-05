import { useSelector } from 'react-redux';
import { selectCatalogs } from '../../redux/selectors';

import css from './CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem';

export default function CatalogList() {
  const adverts = useSelector(selectCatalogs);

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {adverts.map(data => {
          return (
            <li key={data._id} className={css.item}>
              <CatalogItem data={data} />
            </li>
          );
        })}
      </ul>
      <button>Load more</button>
    </div>
  );
}
