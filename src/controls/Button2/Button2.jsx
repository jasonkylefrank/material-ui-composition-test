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

            //const { label, root, contained, ...otherPropClasses } = externalClasses;
            //otherClasses = otherPropClasses;
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
    
    //------------------------------------------------------------

    // This is the "brute force" version of the merging algorithm
    /*
    const { classes, ...otherProps } = props; 

    let labelClasses = styles.label;
    let rootClasses = styles.root;
    let containedClasses = styles.contained;
    let otherClasses;

    if (classes) {
        // Pull out the "other prop classes" so we can add them to the end
        //  of the classes object without blowing-away the ones that we
        //  want to merge with internal classes.
        const { label, root, contained, ...otherPropClasses } = classes;
        otherClasses = otherPropClasses;
        labelClasses = classnames(labelClasses, classes.label);
        rootClasses = classnames(rootClasses, classes.root);
        containedClasses = classnames(containedClasses, classes.contained);
    }

    // Note about the above approach (using classnames): An advantage of using
    //  classnames() is that it avoids having to check if each value is
    //  defined (it avoids dumping "undefined" into the DOM).

    const cssOverrides = {
        root: rootClasses,
        label: labelClasses,
        contained: containedClasses,        
        ...otherClasses
    };
    */

    return (
        <MuiButton classes={cssOverrides} {...otherProps}>
            {props.children}
        </MuiButton>
    );
}
export default Button2;
//export default withStyles(cssOverrides)(Button2);
