import React from 'react';
import {render, shallow, mount} from 'enzyme';
import {expect} from 'chai';

import Member from './member'


describe('Member component caracteristics', () => {
  it('Using Marco as name parameter', () => {
    const wrapper = mount(<Member name="Marco" url="" avatar="" />);

    expect(wrapper.props().name).to.equal('Marco');
  });

  it('Using https://fake-url.com as url parameter', () => {
    const wrapper = mount(<Member name="" url="https://fake-url.com" avatar="" />);

    expect(wrapper.props().url).to.equal('https://fake-url.com');
  });

  it('Using https://fake-url.com as avatar parameter', () => {
    const wrapper = mount(<Member name="" url="" avatar="https://fake-url.com" />);

    expect(wrapper.props().avatar).to.equal('https://fake-url.com');
  });
});
