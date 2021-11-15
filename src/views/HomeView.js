import s from './Views.module.css';
import ModalAdd from 'components/ModalAdd';
import Heroes from 'components/Heroes';

export default function HomePage() {
  return (
    <>
      <h1 className={s.title}>Welcome!</h1>
      <ModalAdd action="add" />
      <Heroes />
    </>
  );
}
