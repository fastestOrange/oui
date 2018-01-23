import React from 'react';
import Dropdown from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

const data = [
  {title: 'Manual', description: 'Dolcelatte cheeseburger swiss paneer cow gouda edam cheese slices'},
  {title: 'Maximize Conventions', header: 'Automation',
    description: 'Everyone loves cut the cheese cow squirty cheese emmental jarlsberg halloumi camembert de normandie.'},
  {title: 'Faster Results', description: 'Cauliflower cheese stilton paneer hard cheese fondue.'},
];

describe('components/Dropdown', () => {
  it('should render children when isOpen is true', () => {
    const component = shallow(
      <Dropdown
        icon={ true }
        buttonContent='Dropdown'>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should not render children when isDisabled is true', () => {
    const component = shallow(
      <Dropdown
        icon={ true }
        buttonContent='Dropdown'
        idDisabled={ true }>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should not use .oui-arrow-inline--down when icon isEqual to triangle', () => {
    const component = shallow(
      <Dropdown
        icon={ true }
        buttonContent='Dropdown'>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should use oui-button--full class when fullWidth is true', () => {
    const component = shallow(
      <Dropdown
        icon={ true }
        buttonContent='Dropdown'
        fullWidth={ true }>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should highlight button class when style equals highlight', () => {
    const component = shallow(
      <Dropdown
        icon={ true }
        buttonContent='Dropdown'
        style='highlight'>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});

