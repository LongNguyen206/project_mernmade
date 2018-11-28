import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

// Styling for our navbar
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: 10,
    fontSize: 17
  },
  text: {
    textAlign: 'center',
    fontSize: 20,

    padding: '0.5em'
  }
};



// here is our navbar
class Navbar extends React.Component{
    state = {
     open: false,
   };

   handleClickOpen = () => {
     this.setState({ open: true });
   };

   handleClose = () => {
     this.setState({ open: false });
   };

    render(){
      const { classes } = this.props
      return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">

          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>

          </Typography>
          <Button color="inherit" onClick={this.handleClickOpen}>Login</Button>

        </Toolbar>
      </AppBar>
      <Dialog
         open={this.state.open}
         onClose={this.handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description">
       <DialogTitle id="alert-dialog-title">{"Have an account? Log In"}</DialogTitle>
         <DialogContent>
           <DialogTitle>
              <Button variant="contained" color="primary" className={classes.button}>
                Sign In with Facebook </Button>
                <Button variant="contained" color="primary" className={classes.button}>
             Sign In with LinkedIn </Button>
        </DialogTitle>
       <DialogContentText className={classes.text}>
               or
      </DialogContentText>


         </DialogContent>
         <DialogActions>
           <Button onClick={this.handleClose} color="primary" autoFocus>
             Sign Up
           </Button>
         </DialogActions>
       </Dialog>
    </div>
  );
}
}

// requiring a class object
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Navbar);
