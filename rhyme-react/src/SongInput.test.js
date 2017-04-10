import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom';
import { shallow, render, mount } from 'enzyme';
import SongInput from './SongInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SongInput />, div);
});

test('input triggers callback', done => {
  const oldText = 'old song text';
  const newText = 'new song text';

  function onChange(e){
    expect(e).toBe(newText);
    done();
  }

  const component = mount(<SongInput text={oldText} handleInput={onChange} />);
  const instance = component.instance();
  const inputElement = component.find('textarea').first();
  inputElement.simulate('change', {target:{value:newText}});
  //expect(instance.state.songText).toBe(songText);
});
