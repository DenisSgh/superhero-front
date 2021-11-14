import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import s from './ModalEdit.module.css';
import Form from 'components/Form';

export default function ModalEdit({
  id,
  nickname,
  realName,
  originDescription,
  superpowers,
  catchPhrase,
  images,
  action,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className={s.button} type="button" onClick={handleOpen}>
        <EditIcon />
      </button>

      <Modal
        open={open}
        onSubmit={handleClose}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Form
              id={id}
              nicknameEdit={nickname}
              realNameEdit={realName}
              originDescriptionEdit={originDescription}
              superpowersEdit={superpowers}
              catchPhraseEdit={catchPhrase}
              imagesEdit={images}
              action={action}
              actionName="Edit superhero"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0),
  },
}));
