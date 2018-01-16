/* eslint-disable react/jsx-key */
import React from 'react';
import Dropdown from '../index';

export default [
  {
    examples: [
      <Dropdown
        arrowIcon={ true }
        isDisabled={ false }
        isOpen={ true }
        fullWidth={ false }
        buttonContent='Dropdown'>
        <ul className="oui-dropdown width--200" style={{display: 'block'}}>
          <li key="1" className="oui-dropdown__item">
            <a key="a" className="oui-dropdown__block-link">Manage Collaborators</a>
            <a key="b" className="oui-dropdown__block-link">Manage This Thing</a>
          </li>
          <li key="2" className="oui-dropdown__item">
            <a key="c" className="oui-dropdown__block-link">Experiment Change History</a>
          </li>
        </ul>
      </Dropdown>,
    ],
  },
];
