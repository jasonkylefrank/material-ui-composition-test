import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { Button as G2Button } from '../controls';
import { Button2 as G2Button2 } from '../controls';
import TabsView from './TabsView';
import styles from './index2.module.scss';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
//import withRoot2 from '../withRoot2';
//import { red } from '@material-ui/core/colors';

// TODO: Clean these up / eliminate / document them (they came origianlly from 
//       the MUI/CRA starter)
const jsStyles = theme => ({
  // root: {
  //   textAlign: 'center',
  //   //paddingTop: theme.spacing.unit * 20,
  //   paddingTop: 20
  // },
});

class Index2 extends React.Component {
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
    //const { classes } = this.props;
    const { open } = this.state;

    const rootClasses = classnames(styles.root, this.props.className);

    return (
      // <div className={classes.root}>
      <div className={rootClasses}>
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
          This is pages/index2.js
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

        <div style={{margin: 8}}>
          <G2Button variant="contained" className={styles.button}>Composition button</G2Button>
          <G2Button className={styles.button}>Composition button</G2Button>
        </div>
        <div style={{margin: 8}}>
          <G2Button2 variant="contained" className={styles.button}>Composition button 2</G2Button2>
          <G2Button2 className={styles.button}>Composition button 2</G2Button2>
        </div>

        <section>
          <Typography>
            MUI buttons with 'color="primary"' React prop
          </Typography>
          <Button
            color="primary"
            variant="contained" className={styles.button}>MUI contained Button</Button>
          <Button 
            color="primary"
            className={styles.button}>MUI Button</Button>
        </section>

        <section>
          <Typography>
            MUI buttons with 'color="primary"' React prop, but passing-in Sass overrides
          </Typography>
          <Button
            color="primary"
            variant="contained" className={styles.buttonColorOverrides}>MUI contained Button</Button>
          <Button 
            color="primary"
            className={styles.buttonColorOverrides}>MUI Button</Button>
        </section>

        <section>
          <Typography>
            MUI button with no props (except className)
          </Typography>
          <Button       
            className={styles.button}>MUI Button</Button>
        </section>

        <section>
          <TabsView />
        </section>
      </div>
    );
  }
}

Index2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(jsStyles)(Index2);
