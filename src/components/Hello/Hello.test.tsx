import * as React from 'react';
import { shallow } from 'enzyme';
import { Hello } from './Hello';

describe('Hello', () => {
  test('renders greeting', () => {
    const wrapper = shallow(<Hello appName="Taped It"/>);
    expect(wrapper.find('h1').text()).toEqual('Say Hello to Taped It!');
  });
});
