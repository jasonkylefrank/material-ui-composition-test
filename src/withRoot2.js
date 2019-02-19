import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
//import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './themeConfig.module.scss';

const themeWithDefaultPropsAndOverrides = {
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
  props: {
    MuiButton: {
      color: 'primary'
    }
  },
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
    // We need this or we get an error
    useNextVariants: true,
    //fontSize: 24
  },
};


const theme1 = Object.assign({}, themeWithDefaultPropsAndOverrides);
delete theme1.overrides;
delete theme1.props;

const theme2 = Object.assign({}, themeWithDefaultPropsAndOverrides);
delete theme2.props;

const theme3 = Object.assign({}, themeWithDefaultPropsAndOverrides);

const theme4 = {
  palette: {
    primary: {
      main: '#2db54a'
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 18
  },
};

function withRoot2(Component) {
  function WithRoot2(props) {
    const themes = {
      theme1: { name: 'theme1', value: theme1 },
      theme2: { name: 'theme2', value: theme2 },
      theme3: { name: 'theme3', value: theme3 },
      theme4: { name: 'theme4', value: theme4 }
    };
    // Get some state
    const [currentTheme, setCurrentTheme] = React.useState(themes.theme1);

    const handleSetTheme = (newThemeName) => {
      setCurrentTheme(themes[newThemeName]); 
    };

    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={createMuiTheme(currentTheme.value)}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} 
          currentThemeName={currentTheme.name} setTheme={handleSetTheme} />   
      </MuiThemeProvider>
    );
  }

  return WithRoot2;
}

export default withRoot2;
