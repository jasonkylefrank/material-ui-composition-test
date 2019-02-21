import React from 'react';
//import { Button as MuiButton, withStyles } from "@material-ui/core";
import { Button as MuiButton } from "@material-ui/core";
import styles from "./Button2.module.scss";
import classnames from 'classnames';

function Button2(props) {

    // TODO: Move this function to a shareable place
    const mergeClassesObjects = (internalClasses, externalClasses) => {
        if (!externalClasses) {
            return internalClasses;
        } else {
            const merged = {};
            const internalClassesKeys = Object.keys(internalClasses);
            const externalCopy = Object.assign({}, externalClasses);
            
            internalClassesKeys.forEach(internalKey => {
                merged[internalKey] = classnames(internalClasses[internalKey], externalClasses[internalKey]);
                delete externalCopy[internalKey];
            });

            return {
                ...merged,
                ...externalCopy // append whatever is leftover
            }        
        }
    };

    const internalClasses = {
        root: styles.root,
        label: styles.label,
        contained: styles.contained
    };

    const { classes, ...otherProps } = props;
    const cssOverrides = mergeClassesObjects(internalClasses, classes);    

    return (
        <MuiButton classes={cssOverrides} {...otherProps}>
            {props.children}
        </MuiButton>
    );
}
export default Button2;
//export default withStyles(cssOverrides)(Button2);
