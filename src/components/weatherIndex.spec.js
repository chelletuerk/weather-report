import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import WeatherIndex from './WeatherIndex'
import Button from './Button'

describe('WeatherIndex', () => {
  it('should trigger "click"', () => {
    const click = sinon.spy()
    const wrapper = mount(<Button handleClick={click} />)
    wrapper.simulate('click')
    expect(click.calledOnce).to.equal(false)
  })
})
