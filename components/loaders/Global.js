import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import BeatLoader from 'react-spinners/BeatLoader';
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 9999,
    backgroundColor: '#FAFAFA',
    top: 80,
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={true} transitionDuration={0}>
      <BeatLoader color="#000" />
    </Backdrop>
  );
}
