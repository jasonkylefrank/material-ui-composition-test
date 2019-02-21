import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// -------- Code to handle the stylesheet insertion order issue ---
//   (see: https://material-ui.com/customization/css-in-js/#css-injection-order)
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById('jss-insertion-point'),
});
// --------

ReactDOM.render(
    <JssProvider jss={jss} generateClassName={generateClassName}>
        <App />
    </JssProvider>,
    document.getElementById('root')
);


if (module.hot) {
    module.hot.accept();
}