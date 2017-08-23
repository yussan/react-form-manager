import React from 'react'
import { shallow, mount, render } from 'enzyme';
import { expect } from  'chai';
import sinon from 'sinon';

import InputText from '../src/index'

describe('<InputText />', () => {
  it('allows to set props', () => {
    const wrapper = mount(<InputText value='this is value' />);
    expect(wrapper.props().value).to.equal('this is value');
    wrapper.setProps({value:'updated value'});
    expect(wrapper.props().value).to.equal('updated value');
  })
})