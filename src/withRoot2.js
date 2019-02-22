import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';
//import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './themeConfig.module.scss';
//import { yellow } from '@material-ui/core/colors';

const themeWithDefaultPropsAndOverrides = {
  palette: {
    //type: 'dark',
    primary: {
      //light: '#FFA000', // Amber 700.  What does this affect???
      main: styles.colorPrimary,
      // "dark" seems to affect things like hover color on "contained" buttons
      //dark: purple[700],
      //dark: '#F06292' // Pink 300
    },
    secondary: {
      //light: green[300],
      //main: blue[500],
      //main: green[500],
      main: styles.colorSecondary
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
      // root: {
      //   backgroundColor: 'lavender',
      //   border: '2px solid red'
      // },
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
      label: {
        color: 'yellow',
        //width: '50%'

        // This is one way to target a label in a 'contained' button. See below
        //  under the "contained {}" block for another way.
        //  Must use the "$". See: https://material-ui.com/customization/overrides/#use-rulename-to-reference-a-local-rule-within-the-same-style-sheet
        '$contained &': {
          color: '#1a55c4', // blue
          fontSize: 11,
          opacity: 0.4
        }
      },
      // This corresponds to the "MuiButton-textPrimary-" CSS class that MUI uses
      textPrimary: {
        '&:hover': {
          backgroundColor:  styles.buttonBackgroundColorMODTextMODHover
        }
      },
      textSecondary: {
        backgroundColor: '#33cc33'
      },
      outlined: {
        background: 'rgba(10, 200, 10, 0.2)'
      },
      contained: {
        // Must use the "$" in order to target it.  This is a second way to target this
        //  label (see above for another way).  
        // '& $label': {
        //   color: '#1a55c4', // blue
        //   fontSize: 10
        // }
      },
      containedPrimary: {
        backgroundColor: 'rgba(200, 10, 70, 0.7)',
        '&:hover': {
          backgroundColor: 'rgba(220, 10, 70, 1.0)'
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
    //fontSize: styles.fontSize
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
    const startingTheme = themes.theme1;
    // Get some state
    const [currentTheme, setCurrentTheme] = React.useState(startingTheme);

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
