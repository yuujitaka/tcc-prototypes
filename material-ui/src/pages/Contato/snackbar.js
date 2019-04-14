import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import SnackbarContent from '@material-ui/core/SnackbarContent';



const SimpleSnackbar = ({
    open,
    duration,
    handleClose,
    text,
}) => (
    <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={duration}
          onClose={handleClose}
          
        //   message={<span id="message-id">{text}</span>}
        //   action={[
        //     <IconButton
        //       key="close"
        //       aria-label="Close"
        //       color="inherit"
        //       onClick={handleClose}
        //     >
        //       <CloseIcon />
        //     </IconButton>,
        //   ]}
        >
            <SnackbarContent 
            action={[
                <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={handleClose}
                >
                <CloseIcon />
                </IconButton>,
            ] }
            aria-describedby="message-id"
            message={<span id="message-id">{text}</span>}
            style={{backgroundColor: green[600]}}
          />
        </Snackbar>
)


export default SimpleSnackbar;