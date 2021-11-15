import { Button, TextField, withStyles } from '@material-ui/core';

export const CssButton = withStyles({
  root: {
    textTransform: 'none',
  },
})(Button);

export const CssButtonLogOut = withStyles({
  root: {
    textTransform: 'none',
    padding: '5px 10px',
    minWidth: '40px',
    marginRight: '10px',
  },
})(Button);

export const CssTextField = withStyles({
  root: {
    width: '400px',
    '& label.Mui-focused': {
      color: '#212121',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#212121',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#212121',
      },
    },
  },
})(TextField);

export const CssTextFieldFilter = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#212121',
    },
    '& .MuiFilledInput-input': {
      width: '250px',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottom: '2px solid #212121',
    },
  },
})(TextField);
