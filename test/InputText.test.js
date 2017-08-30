import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from  'chai'
import sinon from 'sinon'
import {JSDOM} from 'jsdom'
import {InputText} from '../src/index'

import {setValidation} from '../src/lib/validator/InputValidator'

const dom = new JSDOM('<!doctype html><html><body></body></html>')
global.document = dom.window.document
global.window = dom.window

describe('<InputText />', () => {

  it('allows to set props', () => {
    const wrapper = mount(<InputText type='text' name='value' value='this is value' />)
    expect(wrapper.props().value).to.equal('this is value')
    wrapper.setProps({value:'updated value'})
    expect(wrapper.props().value).to.equal('updated value')
  })

  it('on click', ()=> {
    const handleClick = sinon.spy()
    const wrapper = mount(
      <InputText setState={(obj) => handleClick(obj)} type='text' name='value' value='value' />
    )
    wrapper.find('input').simulate('click')
    expect(handleClick.args[0][0]).to.have.deep.keys({value:'value',value_validation:{"is_valid": true}});
  })

  it('on valid change', ()=> {
    const onClick = sinon.spy()

  })

  it('on invalid change', ()=> {
    const onClick = sinon.spy()

  })
})
