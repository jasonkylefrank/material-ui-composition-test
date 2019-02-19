import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
//import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './themeConfig.module.scss';

// A theme with custom primary and secondary color.
// It's optional.
const theme1 = {
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
    // We need this or we get an error
    useNextVariants: true,
    //fontSize: 24
  },
};

const theme2 = {
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
//const muiTheme1 = createMuiTheme(theme1);
//const muiTheme2 = createMuiTheme(theme2);

function withRoot2(Component) {
  function WithRoot2(props) {
    const themes = {
      theme1: { name: 'theme1', value: theme1 },
      theme2: { name: 'theme2', value: theme2 },
    };
    // Get some state
    const [currentTheme, setCurrentTheme] = React.useState(themes.theme1);

    const handleSetTheme = (newThemeName) => {
      switch (newThemeName) {
        case 'theme1':  // fall through          
        case 'theme2':
          setCurrentTheme(themes[newThemeName]);          
          break;
        default:
          console.error(`Error: There is no theme named "${newThemeName}"`);
      }
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
