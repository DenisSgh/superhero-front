import { useEffect } from 'react';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import ModalEdit from 'components/ModalEdit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroById, cleanHero } from 'redux/heroes/heroesOperations';
import { getHero } from 'redux/heroes/heroesSelectors';

import s from './HeroDetails.module.css';
import { CssButtonLogOut } from 'components/customInputs';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function HeroDetails() {
  const hero = useSelector(getHero);
  const {
    params: { id },
  } = useRouteMatch();
  const { state } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeroById({ id }));
  }, [dispatch, id]);

  const handleGoBack = () => {
    dispatch(cleanHero());
    history.push({
      pathname: state?.from?.pathname ?? '/',
    });

    if (state?.from?.pathname !== '/') {
      history.push({
        search: state?.from?.search ?? '',
      });
    }
  };

  return (
    <>
      <div className={s.buttons}>
        <CssButtonLogOut variant="outlined" onClick={handleGoBack}>
          <ExitToAppIcon />
          <span className={s.buttonText}>Go back</span>
        </CssButtonLogOut>
        <ModalEdit action="edit" hero={hero} />
      </div>
      {hero && (
        <section className={s.detailsSection}>
          <ul className={s.listImages}>
            {hero.images.length > 0 ? (
              hero.images.map(img => (
                <li key={img}>
                  <img src={img} alt={hero.nickname} width="150" />
                </li>
              ))
            ) : (
              <li>
                <img
                  src="https://ct.counseling.org/wp-content/uploads/2018/06/Depositphotos_64985287_m-2015-624x542.jpg"
                  alt={hero.nickname}
                  width="250"
                />
              </li>
            )}
          </ul>
          <h1 className={s.detailsTitle}>Nickname: {hero.nickname}</h1>
          <p className={s.detailsText}>Real name: {hero.realName}</p>
          <p className={s.detailsText}>
            Origin description: {hero.originDescription}
          </p>
          <p className={s.detailsText}>Superpowers: {hero.superpowers}</p>
          <p className={s.detailsText}>Catch phrase: {hero.catchPhrase}</p>
        </section>
      )}
    </>
  );
}
