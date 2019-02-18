import React from 'react';
//import { Button as MuiButton, withStyles } from "@material-ui/core";
import { Button as MuiButton } from "@material-ui/core";
import styles from "./button2.module.scss";
//import classnames from 'classnames';

function Button2(props) {

    // Grab all other props so we can pass them through
    const { classes, ...otherProps } = props; 
    // ---- Trying the Material UI classes object approach
    const cssOverrides = {
        root: styles.root,
        contained: styles.contained,
        //label: styles.label,
        label: styles.label,
        ...classes
    };


    return (
        <MuiButton classes={cssOverrides} {...otherProps}>
            {props.children}
        </MuiButton>
    );
}
export default Button2;
//export default withStyles(cssOverrides)(Button2);
