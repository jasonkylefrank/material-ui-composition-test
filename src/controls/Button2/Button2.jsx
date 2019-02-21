import React from 'react';
//import { Button as MuiButton, withStyles } from "@material-ui/core";
import { Button as MuiButton } from "@material-ui/core";
import styles from "./Button2.module.scss";
//import classnames from 'classnames';
import mergeClassesProps from '../../utilities/mergeClassesProps';

function Button2(props) {

    const internalClasses = {
        root: styles.root,
        label: styles.label,
        contained: styles.contained
    };

    const { classes, ...otherProps } = props;
    const cssOverrides = mergeClassesProps(internalClasses, classes);    

    return (
        <MuiButton classes={cssOverrides} {...otherProps}>
            {props.children}
        </MuiButton>
    );
}
export default Button2;
//export default withStyles(cssOverrides)(Button2);
