import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import s from './ModalEdit.module.css';
import Form from 'components/Form';
import { CssButtonLogOut } from 'components/customInputs';

export default function ModalEdit({ action, hero }) {
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
      <CssButtonLogOut variant="outlined" onClick={handleOpen}>
        <EditIcon />
        <span className={s.buttonText}>Edit</span>
      </CssButtonLogOut>

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
            {hero && (
              <Form
                id={hero._id}
                nicknameEdit={hero.nickname}
                realNameEdit={hero.realName}
                originDescriptionEdit={hero.originDescription}
                superpowersEdit={hero.superpowers}
                catchPhraseEdit={hero.catchPhrase}
                // imagesEdit={hero.images}
                action={action}
                actionName="Edit superhero"
              />
            )}
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
