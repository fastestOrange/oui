import React from 'react';
import TR from '../index';
import { shallow } from 'enzyme';

describe('components/Table/TR', () => {
  it('should render as a `tr`', () => {
    const component = shallow(<TR></TR>);
    expect(component.type()).toBe('tr');
  });

  it('should render children', () => {
    const component = shallow(<TR><td></td></TR>);
    expect(component.containsMatchingElement(<td></td>)).toBe(true);
  });

  it('should render with test section', () => {
    const component = shallow(<TR testSection="goose"></TR>);
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });

  it('should render without a border if noBorder is passed', () => {
    const component = shallow(<TR noBorder={ true } testSection="goose"></TR>);
    expect(component.hasClass('no-border')).toBe(true);
  });
});
