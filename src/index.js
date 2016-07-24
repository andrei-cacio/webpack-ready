import './style.less';
import React from 'react';
import { render } from 'react-dom';

const App = (props) => (<div>Hello, {props.who} !</div>);

render(<App who="world" />, document.getElementById('root'));

