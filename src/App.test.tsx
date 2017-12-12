import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
// import Button from './Button';

// configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// it('renders button saying "I Do nothing"', () => {
//   const button = shallow(
//     <Button/>
//   );
//   expect(button.text()).toEqual('I Do nothing');
// });