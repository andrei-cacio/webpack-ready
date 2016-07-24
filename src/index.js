import './style.less';
import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './components/hello';

render(<HelloWorld who="world" />, document.getElementById('root'));

