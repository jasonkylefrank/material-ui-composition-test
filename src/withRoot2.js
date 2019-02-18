import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
//import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './themeConfig.module.scss';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      //light: purple[300],
      main: styles.colorPrimary,
      //dark: purple[700],
    },
    secondary: {
      //light: green[300],
      //main: blue[500],
      main: green[500],
      //dark: green[700],
    },
  },
  typography: {
    useNextVariants: true,
    //fontSize: 24
  },
});

function withRoot2(Component) {
  function WithRoot2(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot2;
}

export default withRoot2;
