import React from 'react';
import { AppBar, IconButton, Icon, Typography, Drawer } from './controls';
import Index2 from './views/index2';
import Settings from './views/Settings';
import withRoot2 from './withRoot2';
import styles from './App.module.scss'; 

function App() {
    // Get some hooks
    const [state, setState] = React.useState({
        isSettingsOpen: false
    });

    const toggleSettings = () => {
        setState({ ...state, isSettingsOpen: !state.isSettingsOpen});
    }
  
    return (
    <div>
        <AppBar>
            <div className={styles.appBarContents}>
                <IconButton aria-label="Open nav"
                    className={styles.menuIconButton}>
                    <Icon>menu</Icon>
                </IconButton>
                <Typography 
                    variant='h6' 
                    color='inherit'
                    className={styles.appBarText}>
                    Demo app
                </Typography>
                <IconButton aria-label="Open settings"
                    onClick={toggleSettings}
                    className={styles.settingsIconButton}>
                    <Icon>settings</Icon>
                </IconButton>
            </div>
        </AppBar>

        <Index2 className={styles.mainContent} />

        <Drawer anchor="right" 
            open={state.isSettingsOpen}
            onClose={toggleSettings}>
            <Settings />
        </Drawer>
    </div>
    );
}


export default withRoot2(App);
