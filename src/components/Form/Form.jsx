import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import shortid from 'shortid';

import {
  fetchHeroes,
  fetchAddHero,
  fetchEditHero,
  fetchHeroById,
} from 'redux/heroes/heroesOperations';
import { CssButton, CssTextField } from 'components/customInputs';

import s from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getHero, getPage } from 'redux/heroes/heroesSelectors';

const Form = ({
  id,
  nicknameEdit = '',
  realNameEdit = '',
  originDescriptionEdit = '',
  superpowersEdit = '',
  catchPhraseEdit = '',
  imagesEdit = null,
  action,
  actionName,
}) => {
  const classes = useStyles();

  const [nickname, setNickname] = useState(nicknameEdit);
  const [realName, setRealName] = useState(realNameEdit);
  const [originDescription, setOriginDescription] = useState(
    originDescriptionEdit,
  );
  const [superpowers, setSuperpowers] = useState(superpowersEdit);
  const [catchPhrase, setCatchPhrase] = useState(catchPhraseEdit);
  const [images, setImages] = useState(imagesEdit);
  const dispatch = useDispatch();
  const isButtonDisable = nickname === '';
  const page = useSelector(getPage);
  const [closeModal, setCloseModal] = useState();
  const hero = useSelector(getHero);

  useEffect(() => {
    if (hero) {
      dispatch(fetchHeroById({ id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeModal]);

  const handleCreateContact = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'nickname':
        return setNickname(value);

      case 'realName':
        return setRealName(value);

      case 'originDescription':
        return setOriginDescription(value);

      case 'superpowers':
        return setSuperpowers(value);

      case 'catchPhrase':
        return setCatchPhrase(value);

      case 'images':
        return setImages(e.target.files);

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      nickname,
      realName,
      originDescription,
      superpowers,
      catchPhrase,
    };

    const dataForm = new FormData();

    Object.keys(data).forEach(element =>
      dataForm.append(element, data[element]),
    );

    if (images) {
      Object.keys(images).forEach(element =>
        dataForm.append('images', images[element], images[element].name),
      );
    }

    switch (action) {
      case 'add':
        dispatch(fetchAddHero(dataForm));
        break;

      case 'edit':
        dispatch(fetchEditHero({ id, data }));
        setCloseModal(1);
        break;

      default:
        break;
    }

    reset();
    dispatch(fetchHeroes({ page }));
  };

  const reset = () => {
    setNickname('');
    setRealName('');
    setOriginDescription('');
    setSuperpowers('');
    setCatchPhrase('');
    setImages('');
  };

  const nicknameId = shortid.generate();
  const realNameId = shortid.generate();
  const originDescriptionId = shortid.generate();
  const superpowersId = shortid.generate();
  const catchPhraseId = shortid.generate();

  return (
    <div className={s.container}>
      <form
        encType="multipart/form-data"
        className={s.form}
        onSubmit={handleSubmit}
      >
        <div className={s.inputContainer}>
          <CssTextField
            id={nicknameId}
            autoFocus={true}
            required={true}
            type="text"
            name="nickname"
            label="Nickname"
            value={nickname}
            onChange={handleCreateContact}
            variant="outlined"
          />
        </div>

        <div className={s.inputContainer}>
          <CssTextField
            id={realNameId}
            type="text"
            name="realName"
            label="Real name"
            value={realName}
            onChange={handleCreateContact}
            variant="outlined"
          />
        </div>

        <div className={s.inputContainer}>
          <CssTextField
            id={originDescriptionId}
            multiline={true}
            type="text"
            name="originDescription"
            label="Origin description"
            value={originDescription}
            onChange={handleCreateContact}
            variant="outlined"
          />
        </div>

        <div className={s.inputContainer}>
          <CssTextField
            id={superpowersId}
            multiline={true}
            type="text"
            name="superpowers"
            label="Superpowers"
            value={superpowers}
            onChange={handleCreateContact}
            variant="outlined"
          />
        </div>

        <div className={s.inputContainer}>
          <CssTextField
            id={catchPhraseId}
            multiline={true}
            type="text"
            name="catchPhrase"
            label="Catch phrase"
            value={catchPhrase}
            onChange={handleCreateContact}
            variant="outlined"
          />
        </div>

        {action !== 'edit' && (
          <div className={s.inputContainer}>
            <input
              id="contained-button-file"
              type="file"
              className={classes.input}
              name="images"
              accept="image/*"
              multiple
              onChange={handleCreateContact}
            />
            <label htmlFor="contained-button-file">
              <CssButton variant="outlined" component="span">
                {!images
                  ? 'Upload superhero images'
                  : `${images.length} uploaded images`}
              </CssButton>
            </label>
          </div>
        )}

        <CssButton type="submit" variant="outlined" disabled={isButtonDisable}>
          {actionName}
        </CssButton>
      </form>
    </div>
  );
};

export default Form;

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
    backgroundColor: '#000',
  },
}));
