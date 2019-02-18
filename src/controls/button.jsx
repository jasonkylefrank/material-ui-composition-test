import React from 'react';
//import { Button as MuiButton, withStyles } from "@material-ui/core";
import { Button as MuiButton } from "@material-ui/core";
import styles from "./button.module.scss";
import classnames from 'classnames';


function Button(props) {
    const { variant } = props;

    const classNames = classnames(
        styles.root,
        { [styles.contained]: (variant === 'contained' || variant === 'fab') },
        props.className
    );
    //console.log('Hello from Button function!');
    //console.log(classNames);


    // Grab all other props so we can pass them through
    const { className, ...otherProps } = props; 

    return (
        <MuiButton className={classNames} {...otherProps}>
            {props.children}
        </MuiButton>
    );
}
export default Button;
//export default withStyles(cssOverrides)(Button);
