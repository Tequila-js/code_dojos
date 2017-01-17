import React from 'react';
import {render, shallow} from 'enzyme';
import {expect} from 'chai';

import Loader from './loader';

describe('Loader component caracteristics', () => {
  it('It shouldn\'t render text', () => {
    expect(render(<Loader />)).to.have.text('');
  });

  it('It should be equals to <div className="loader"></div>', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.equals(<div className="loader"></div>)).to.equal(true);
  })
});
