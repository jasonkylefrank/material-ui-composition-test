import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { Button as G2Button } from '../controls';
import { Button2 as G2Button2 } from '../controls';
import styles from './index.module.scss';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
//import { red } from '@material-ui/core/colors';

const jsStyles = theme => ({
  root: {
    textAlign: 'center',
    //paddingTop: theme.spacing.unit * 20,
    paddingTop: 20
  },
  //
  containerTest: {
    marginTop: 36
  },
  buttonTest: {
    backgroundColor: 'red'
  }
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>

        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          example project
        </Typography>


        {/* <Button variant="contained" color="secondary" onClick={this.handleClick}>
          Super Secret Password
        </Button>

        <div className={classes.containerTest}>
          
          <Button variant="contained" color="secondary" onClick={this.handleClick}
            className={classes.buttonTest}>
            Super Secret Password
          </Button>
        </div> */}

        This is default text.

        <div style={{margin: 16}}>
          <G2Button variant="contained" className={styles.button}>G2 button</G2Button>
          <G2Button className={styles.button}>G2 button</G2Button>
        </div>
        <div style={{margin: 16}}>
          <G2Button2 variant="contained" className={styles.button}>G2 button 2</G2Button2>
          <G2Button2 className={styles.button}>G2 button 2</G2Button2>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(jsStyles)(Index));
