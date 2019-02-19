import React from 'react';
//import PropTypes from 'prop-types';
//import { makeStyles, useTheme } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';

// Code originally copied from: https://material-ui.com/demos/tabs/#full-width

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// }));

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

function TabsView(props) {

  //const classes = useStyles();
  //const theme = useTheme();
  const { classes, theme } = props;
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }
  return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant={null}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <Typography>Item One</Typography>
          <Typography>Item Two</Typography>
          <Typography>Item Three</Typography>
        </SwipeableViews>
      </div>
  );
}
// Regarding the withTheme syntax, see: https://github.com/mui-org/material-ui/issues/8937#issuecomment-341085210
export default withStyles(styles, { withTheme: true })(TabsView);