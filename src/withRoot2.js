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
  // props: {
  //   MuiButton: {
  //     color: 'primary'
  //   }
  // },
  overrides: {
    MuiButton: {
      // When the button's variant="text" (which is also default).
      // This corresponds to the "MuiButton-text-" CSS class that MUI uses
      text: {
        backgroundColor: styles.buttonBackgroundColorMODText,
        // This is won't take precedence if the button is a 'color="primary"' text button.
        //   For that case we must use textPrimary instead (see below).
        '&:hover': {
          backgroundColor: 'purple'
        }
      },
      // This corresponds to the "MuiButton-textPrimary-" CSS class that MUI uses
      textPrimary: {
        '&:hover': {
          backgroundColor:  styles.buttonBackgroundColorMODTextMODHover
        }
      }
    },
    // MuiIconButton: {
    //   root: {
    //     opacity
    //   }
    // }
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
