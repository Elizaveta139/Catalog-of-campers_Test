import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import toast from 'react-hot-toast';
import { favoriteCamper } from '../../redux/operations';
import css from './CatalogItem.module.css';

export default function CatalogItem({ data }) {
  const dispatch = useDispatch();
  const [selectedCamperId, setSelectedCamperId] = useState(null);
  //   const [selectedCamper, setSelectedCamper] = useState(null);
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    name,
    price,
    rating,
    location,
    description,
    adults,
    transmission,
    engine,
    reviews,
    gallery,
    details,
  } = data;

  return (
    <div className={css.wrap}>
      <div>
        <img src={gallery[0]} alt={name} />
      </div>
      <div className={css.infoContacts}>
        <h3 className={css.text}>{name}</h3>
        <h3 className={css.text}>{price}</h3>
        <p className={css.text}>
          {rating} ({reviews.length} Reviews)
        </p>
        <p className={css.text}>{location}</p>
        <p className={css.text}>{description}</p>
        <p className={css.text}>{adults} adults</p>
        <p className={css.text}>ucFirst({transmission})</p>
        <p className={css.text}>ucFirst({engine})</p>
        {details.kitchen !== 0} && <p className={css.text}>Kitchen</p>
        <p className={css.text}>({details.beds.length} Beds)</p>
        {details.airConditioner !== 0} && <p className={css.text}>AC</p>
      </div>
      <div className={css.btnWrap}>
        <button
          type="button"
          className={css.btn}
          //   onClick={() => handleEdit({ id, name, number })}
        >
          Show more
        </button>
      </div>
    </div>
  );
}
