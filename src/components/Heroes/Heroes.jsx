// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
// import { getVisibleContacts } from 'redux/contacts/contactsSelectors';
// import {
//   fetchContacts,
//   fetchDeleteContact,
// } from 'redux/contacts/contactsOperations';

import { fetchDeleteHero } from 'components/ApiService';
import Pagination from 'components/Pagination';
import s from './Heroes.module.css';

const Heroes = ({ setPage, heroes, totalDocs }) => {
  // const contacts = useSelector(getVisibleContacts);
  // const dispatch = useDispatch();
  const location = useLocation();

  const deleteHero = async id => {
    fetchDeleteHero(id);
  };

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
                        images
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
                    onClick={() => deleteHero(_id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {/* {totalDocs > 5 && ( */}
          <Pagination
            itemsPerPage={5}
            newPageNumber={newPageNumber}
            totalDocs={totalDocs}
          />
          {/* )} */}
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
