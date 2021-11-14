// import Filter from 'components/Filter';
// import Contacts from 'components/Contacts';
import s from './Views.module.css';
// import ModalEdit from 'components/ModalEdit/ModalEdit';

export default function ContactsView() {
  return (
    <div className={s.contactsContainer}>
      <h2 className={s.mainTitle}>PHONEBOOK</h2>
      {/* <ModalEdit action="edit" />
      <Filter />
      <Contacts /> */}
    </div>
  );
}
