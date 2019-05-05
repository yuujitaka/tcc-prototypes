import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

// const DialogActions = withStyles(theme => ({
//   root: {
//     borderTop: `1px solid ${theme.palette.divider}`,
//     margin: 0,
//     padding: theme.spacing.unit,
//   },
// }))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
  render() {
    const { title, textContent, open, onClose, img, alt } = this.props;
    return (
      <div>
        <Dialog
          onClose={onClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={onClose}>
            {title}
          </DialogTitle>
          <DialogContent>
            <img src={require('../../img/sem_foto.png')} style={{maxWidth: '100%', height: 'auto', width: '100%'}} alt={alt}></img>
            <Typography gutterBottom>
              {textContent}
            </Typography>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogDemo;