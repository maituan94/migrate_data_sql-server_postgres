import React from 'react';
import { shallow } from 'enzyme';
import {RawMaterial} from '../index';

describe('RawMaterial Component', () => {
  it('It should render without error', () => {
    const component = shallow(
        <RawMaterial/>
    );
    
    const wrapper = component.find('.RawMaterialComponent');
    expect(wrapper.length).toBe(1);
  });
});