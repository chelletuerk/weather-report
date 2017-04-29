import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon'
import * as actions from './index'

describe('actions', () => {

  xit('should store selected family', () => {
    const data = { somejson: 'somejson', somemorejson: 'somemorejson' }
    const expectedAction = {
      type: 'SEARCHED_CITY',
      query: { somejson: 'somejson', somemorejson: 'somemorejson' },
      payload: { somejson: 'somejson', somemorejson: 'somemorejson' }
    }
    expect(actions.displaySearchedCity(data)).to.deep.equal(expectedAction)
  })
})
