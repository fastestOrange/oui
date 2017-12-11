import React from 'react';
import Popover from '../index';
import { shallow, render } from 'enzyme';

describe('components/Popover', () => {
  it('should render text passed in as children', () => {
    const message = 'Hello! This is a short popover.';
    const component = shallow(
      <Popover>{ message }</Popover>
    );
    expect(component.text()).toBe(message);
  });

  it('should render title when provided', () => {
    const title = '123456';
    const component = shallow(
      <Popover title={ title }>Heyo!</Popover>
    );
    expect(component.text()).toContain(title);
  });

  it('has `oui-pop--over` class applied', () => {
    const component = shallow(<Popover>Heyo!</Popover>);
    expect(component.hasClass('oui-pop--over')).toBe(true);
  });

  it('should overwrite SCSS to display by default', () => {
    const component = render(
      <Popover>Heyo!</Popover>
    );
    expect(component.attr('style')).toContain('display:block');
    expect(component.attr('style')).toContain('opacity:1');
    expect(component.attr('style')).toContain('position:initial');
  });

  it('should have a properly set test section', () => {
    const component = shallow(
      <Popover testSection="foo">Heyo!</Popover>
    );
    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });

  it('should not modify classes when "default" is provided for padding prop', () => {
    const component = shallow(
      <Popover padding="default">Heyo!</Popover>
    );
    var popOverContainerClassName = component.find('div.oui-pop--over__content').get(0).props.className;
    expect(popOverContainerClassName).toBe('oui-pop--over__content');
  });

  it('should not modify classes when nothing is provided for padding prop', () => {
    const component = shallow(
      <Popover>Heyo!</Popover>
    );
    var popOverContainerClassName = component.find('div.oui-pop--over__content').get(0).props.className;
    expect(popOverContainerClassName).toBe('oui-pop--over__content');
  });

  it('should not modify classes when an invalid class is provided for padding prop', () => {
    const component = shallow(
      <Popover padding="foobar">Heyo!</Popover>
    );
    var popOverContainerClassName = component.find('div.oui-pop--over__content').get(0).props.className;
    expect(popOverContainerClassName).toBe('oui-pop--over__content');
  });

  it('should modify classes when a valid class is provided for padding prop', () => {
    const component = shallow(
      <Popover padding="hard">Heyo!</Popover>
    );
    var popOverContainerClassName = component.find('div.oui-pop--over__content').get(0).props.className;
    expect(popOverContainerClassName).toContain('hard');
  });
});
