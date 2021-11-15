import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchHeroes, fetchDeleteHero } from 'redux/heroes/heroesOperations';
import { getHeroes, getTotalDocs } from 'redux/heroes/heroesSelectors';
import DeleteIcon from '@material-ui/icons/Delete';

import Pagination from 'components/Pagination';
import s from './Heroes.module.css';

const Heroes = () => {
  const [page, setPage] = useState(1);
  const heroes = useSelector(getHeroes);
  const totalDocs = useSelector(getTotalDocs);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchHeroes({ page }));
  }, [dispatch, page]);

  const newPageNumber = async newPage => {
    setPage(newPage);
  };

  return (
    <>
      {heroes.length !== 0 ? (
        <>
          <ul className={s.list}>
            {heroes.map(({ _id, nickname, images }) => (
              <li className={s.item} key={_id}>
                <div className={s.position}>
                  <Link
                    className={s.link}
                    to={{
                      pathname: `/heroes/${_id}`,
                      state: {
                        from: location,
                      },
                    }}
                  >
                    <img
                      src={
                        images.length > 0
                          ? images[0]
                          : 'https://ct.counseling.org/wp-content/uploads/2018/06/Depositphotos_64985287_m-2015-624x542.jpg'
                      }
                      alt="Superhero"
                      width="150"
                    />
                  </Link>

                  <Link
                    className={s.link}
                    to={{
                      pathname: `/heroes/${_id}`,
                      state: {
                        from: location,
                      },
                    }}
                  >
                    <p className={s.name}>{nickname}</p>
                  </Link>

                  <button
                    className={s.button}
                    type="button"
                    onClick={() => {
                      dispatch(fetchDeleteHero({ _id }));
                      dispatch(fetchHeroes({ page }));
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {totalDocs > 5 && (
            <Pagination newPageNumber={newPageNumber} totalDocs={totalDocs} />
          )}
        </>
      ) : (
        <p className={s.empty}>
          There are no superheroes in the database, please add them
        </p>
      )}
    </>
  );
};

export default Heroes;
