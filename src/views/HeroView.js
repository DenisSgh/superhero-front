import HeroDetails from 'components/HeroDetails';
import s from './Views.module.css';

export default function ContactsView() {
  return (
    <div className={s.contactsContainer}>
      <HeroDetails />
    </div>
  );
}
