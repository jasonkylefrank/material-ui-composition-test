import classnames from 'classnames';

// This function provides a convenient way to merge 2 objects containing CSS
//  class names which are meant to be supplied to Material UI controls via
//  their "classes" prop.  For each key which is represented in both objects,
//  the corresponding values of those shared keys will be merged such that the
//  new values contain BOTH values.  In this way, this merge function creates 
//  and returns a new object that applies the CSS class names of both sets of 
//  input objects.
// The typical use-case is where we are trying to apply both "internal" classes
//  and "external" classes (ones passed-in by consuming components). 
const mergeClassesProps = (internalClasses, externalClasses) => {
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

export default mergeClassesProps;