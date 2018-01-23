import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Disclose from '../index';

const disclose = shallow(<Disclose title='Some title'> <div>disclose this</div> </Disclose>);


describe('Disclose Component ', () => {
  it('renders correctly', () => {
    expect(shallowToJson(disclose)).toMatchSnapshot();
  });
});
