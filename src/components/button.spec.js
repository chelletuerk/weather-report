import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import Button from './Button'

describe('Button', () => {
  it('should have a handleClick', () => {
    const handleClick = sinon.spy()
    const wrapper = shallow(<Button handleClick={handleClick} />)
    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).to.equal(false)
  })

  it('should trigger "click"', () => {
    const click = sinon.spy()
    const wrapper = mount(<Button handleClick={click} />)
    wrapper.simulate('click')
    expect(click.calledOnce).to.equal(false)
  });

  it('should allow props to be set', () => {
    const wrapper = mount(<Button prop="setProp" />);
    expect(wrapper.props().prop).to.equal('setProp');
    wrapper.setProps({ prop: 'newProp' });
    expect(wrapper.props().prop).to.equal('newProp');
  });
});
