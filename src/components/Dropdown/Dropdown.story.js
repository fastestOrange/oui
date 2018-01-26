import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Dropdown from './index.js';
import BlockList from '../BlockList';
import TextField from '../TextField';
import Icon from 'react-oui-icons';

const data = [
  {title: 'Manual', description: 'Dolcelatte cheeseburger swiss paneer cow gouda edam cheese slices'},
  {title: 'Maximize Conventions', header: 'Automation',
    description: 'Everyone loves cut the cheese cow squirty cheese emmental jarlsberg halloumi camembert de normandie.'},
  {title: 'Faster Results', description: 'Cauliflower cheese stilton paneer hard cheese fondue.'},
];

const stories = storiesOf('Dropdown', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('text behind', withInfo()(() => {
  return (
    <Container>
      <SubContainer>
        <ScrollContainer>
          <Dropdown
            arrowIcon={ true }
            isDisabled={ boolean('isDisabled', false) }
            buttonContent='Dropdown'
            width={ number('width', 300) }>
            <BlockList>
              {
                data.map((item, index) => {
                  return (
                    <BlockList.Category header={ item.header } key={ index }>
                      <BlockList.Item onClick={ action('click on complex item') }>
                        <div className="flex flex-align--center">
                          <div className="flex--1">
                            <div>{ item.title }</div>
                            <div className="muted micro">{ item.description }</div>
                          </div>
                        </div>
                      </BlockList.Item>
                    </BlockList.Category>
                  );
                })
              }
            </BlockList>
          </Dropdown>
          <h1>This text should be behind the open dropdown</h1>
        </ScrollContainer>
      </SubContainer>
    </Container>
  );
}));


stories.add('with icon', withInfo()(() => {
  return (
    <Container>
      <SubContainer>
        <ScrollContainer>
          <div style={{ width: 200, float: 'left' }}>
            <TextField
              placeholder=".tags"
              type="text"
            />
          </div>
          <Dropdown
            isDisabled={ boolean('isDisabled', false) }
            fullWidth={ boolean('fullWidth', false) }
            buttonContent={ <Icon name='hamburger' /> }
            width={ number('width', 350) }>
            <BlockList>
              {
                data.map((item, index) => {
                  return (
                    <BlockList.Category header={ item.header } key={ index }>
                      <BlockList.Item onClick={ action('click on complex item') }>
                        <div className="flex flex-align--center">
                          <div className="flex--1">
                            <div>{ item.title }</div>
                            <div className="muted micro">{ item.description }</div>
                          </div>
                        </div>
                      </BlockList.Item>
                    </BlockList.Category>
                  );
                })
              }
            </BlockList>
          </Dropdown>
          <h1>This text should be behind the open dropdown</h1>
        </ScrollContainer>
      </SubContainer>
    </Container>
  );
}));

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  background: #f6f6f6;
`;

const SubContainer = styled.div`
  width: 700px;
  height: 400px;
  background: lightgrey;
  margin: 100px auto;
  overflow: scroll;
  padding: 20px;
  padding-top: 300px;
`;

const ScrollContainer = styled.div`
  width: 1000px;
  height: 1000px;
`;
