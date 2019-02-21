import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

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

    const buttonOverrideClasses = {
      root: styles.buttonColorOverrides,
      label: styles.buttonLabelColorOverrides,
      contained: styles.containedButtonOverrides,
      outlined: styles.outlinedButtonOverrides
    };

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
        
        <section>
          <Typography variant="h6" className={styles.sectionHeader}>
              Composition buttons
          </Typography>
          <Typography variant="caption">
            Classes prop not utilized
          </Typography>
          <G2Button2 className={styles.button} variant="contained">Composition button 2</G2Button2>

          <G2Button2 className={styles.button}>Composition button 2</G2Button2>

          <G2Button2 className={styles.button} variant="outlined">Outlined</G2Button2>
        </section>

        <section>
          <Typography variant="caption">
            Passing in classes via classes prop
          </Typography>
          <G2Button2 variant="contained" classes={buttonOverrideClasses}>Composition button 2 - classes</G2Button2>

          <G2Button2 classes={buttonOverrideClasses}>Composition button 2 - classes</G2Button2>

          <G2Button2 variant="outlined" classes={buttonOverrideClasses}>Outlined</G2Button2>
        </section>

        <section>
          <Typography variant="h6" className={styles.sectionHeader}>
              MUI Buttons
          </Typography>
          <Typography variant="caption">
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
          <Typography variant="caption">
            MUI buttons with 'color="primary"' React prop, but passing-in Sass overrides via className
          </Typography>
          <Button
            color="primary"
            variant="contained" 
            className={styles.buttonColorOverrides}>MUI contained Button</Button>
          <Button 
            color="primary"
            className={styles.buttonColorOverrides}>MUI Button</Button>
        </section>

        <section>
          <Typography variant="caption">
            MUI button with no props (except className)
          </Typography>
          <Button       
            className={styles.button}>MUI Button</Button>
        </section>

        <section className={styles.tabsSection}>
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
