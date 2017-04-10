import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('input changes state', () => {
  const songText = 'new song text';
  const component = shallow(<App />);
  const instance = component.instance()
  instance.handleSongInput(songText);

  expect(instance.state.songText).toBe(songText);
});
