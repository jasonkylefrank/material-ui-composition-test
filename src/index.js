import React from 'react';
import ReactDOM from 'react-dom';
//import Index from './pages/index';
import Index2 from './pages/index2';
import * as serviceWorker from './serviceWorker';
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
        {/* <Index />  */}
        <Index2 />
    </JssProvider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept();
}