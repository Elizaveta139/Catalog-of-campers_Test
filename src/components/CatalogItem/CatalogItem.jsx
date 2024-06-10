import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import toast from 'react-hot-toast';
import { favoriteCamper } from '../../redux/operations';
import css from './CatalogItem.module.css';
import sprite from '../../assets/sprite.svg';

export default function CatalogItem({ data }) {
  const dispatch = useDispatch();
  // const [selectedCamperId, setSelectedCamperId] = useState(null);
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
      {/* <div className={css.img}> */}
      <img src={gallery[0]} alt={name} className={css.img} />
      {/* </div> */}
      <div>
        <div className={css.wrapTitle}>
          <h3 className={css.title}>{name}</h3>
          <div className={css.wrapPrice}>
            <h3 className={css.title}>€{price},00</h3>
            <button type="button" className={css.favoriteBtn} onClick={() => console.log({ name })}>
              <svg width="24" height="24">
                <use xlinkHref={sprite + '#icon-favorite'} className={css.svgFavorite}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.wrapLocationRev}>
          <div className={css.location}>
            <svg width="16" height="16">
              <use xlinkHref={sprite + '#icon-star'} className={css.svgStar}></use>
            </svg>
            <p className={`${css.textLocation} ${css.reviewsText}`}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.location}>
            <svg width="16" height="16">
              <use xlinkHref={sprite + '#icon-map'} className={css.svgFavorite}></use>
            </svg>
            <p className={css.textLocation}>{location}</p>
          </div>
        </div>

        <p className={css.description}>{description}</p>

        <ul className={css.divInfo}>
          <li className={`${css.text} ${css.textTransform}`}>{adults} adults</li>
          <li className={css.text}>{transmission}</li>
          <li className={css.text}>{engine}</li>
          {details.kitchen !== 0 && <li className={css.text}>Kitchen</li>}
          <li className={`${css.text} ${css.textTransform}`}>{details.beds} beds</li>
          {details.airConditioner !== 0 && <li className={css.text}>AC</li>}
        </ul>
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
    </div>
  );
}
