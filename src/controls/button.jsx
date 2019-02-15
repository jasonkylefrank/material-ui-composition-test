import React from 'react';
//import { Button as MuiButton, withStyles } from "@material-ui/core";
import { Button as MuiButton } from "@material-ui/core";
import styles from "./button.module.scss";
import classnames from 'classnames';

// Trying to solve a precedence problem (following MUI's guidance by putting these outside the component)
// const cssOverrides = {
//     contained: styles.contained,
//     // What if I want to style the label a certain way in response to the button being a "contained" button?
//     // (Now that these things are outside the component, I don't have access to props.)
//     label: styles.label
// };

function Button(props) {
    const { variant } = props;

    const classNames = classnames(
        styles.root,
        { [styles.contained]: (variant === 'contained' || variant === 'fab') },
        //styles.label,        
        //props.classes // TODO: consider if this should be a different name
        props.className
    );
    console.log('Hello from Button function!');
    console.log(classNames);

    // ---- Trying the Material UI classes object approach
    // const cssOverrides = {
    //     contained: styles.contained,
    //     label: styles.label
    // };


    // Grab all other props so we can pass them through
    //const { classes, ...otherProps } = props; 
    //console.log(`classes: ${JSON.stringify(classes)}`);
    const { className, ...otherProps } = props; 

    return (
        // TODO: Combine these overrides classes with prop classes
        // <MuiButton classes={cssOverrides} {...otherProps}>
        //     {props.children}
        // </MuiButton>

        // <MuiButton classes={classNames} {...otherProps}>
        //     {props.children}
        // </MuiButton>

        // <MuiButton classes={classes} {...otherProps}>
        //     {props.children}
        // </MuiButton>

        <MuiButton className={classNames} {...otherProps}>
            {props.children}
        </MuiButton>
    );
}
export default Button;
//export default withStyles(cssOverrides)(Button);
