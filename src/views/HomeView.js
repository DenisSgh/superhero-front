import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import s from './Views.module.css';
import ModalAdd from 'components/ModalAdd';
import Heroes from 'components/Heroes';
import { fetchHeroes } from 'components/ApiService';

export default function HomePage() {
  const [heroes, setHeroes] = useState([]);
  const [totalDocs, setTotalDocs] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchHeroes(page).then(res => setHeroes(res.heroes.docs));
    setTotalDocs(heroes.totalDocs);
    // dispatch(fetchContacts());
  }, []);

  useEffect(() => {
    setTotalDocs(heroes.totalDocs);
    // dispatch(fetchContacts());
  }, [heroes, totalDocs]);

  return (
    <>
      <h1 className={s.title}>Welcome!</h1>
      <ModalAdd action="add" />
      <Heroes setPage={setPage} heroes={heroes} totalDocs={totalDocs} />
    </>
  );
}
