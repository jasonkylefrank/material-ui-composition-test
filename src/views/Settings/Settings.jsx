import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '../../controls';
import classnames from 'classnames';
import styles from './Settings.module.scss';

export default function Settings(props) {
    // const [currentTheme, setCurrentTheme] = React.useState('theme1');

    const handleThemeSelection = (e) => {
        const newTheme = e.target.value;
        //setCurrentTheme(newTheme);
        //console.log(newTheme);
        props.setTheme(newTheme);
    }

    const rootClasses = classnames(styles.root, props.className);

    return (
        <aside className={rootClasses}>
            <FormControl component="fieldset" 
                //className={classes.formControl}
                >
                <FormLabel component="legend">Current Theme</FormLabel>
                <RadioGroup
                    aria-label="Theme selection"
                    name="ThemeGroup"
                    // className={classes.group}
                    value={props.currentThemeName}
                    onChange={handleThemeSelection}
                >
                    <FormControlLabel value="theme1" control={<Radio />} label="Theme 1" />
                    <FormControlLabel value="theme2" control={<Radio />} label="Theme 2" />
                    {/* <FormControlLabel value="theme3" control={<Radio />} label="Theme 3" /> */}
                </RadioGroup>
            </FormControl>
        </aside>
    );
}
