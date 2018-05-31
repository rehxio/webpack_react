import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';
import NumberPicker from './components/NumberPicker';

ReactDOM.render(<NumberPicker maxOfClicks={3} minOfClicks={-3}/>, document.getElementById('app'));