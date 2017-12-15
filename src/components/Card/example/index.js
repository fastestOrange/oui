/* eslint-disable react/jsx-key */
import React from 'react';
import Card from '../index';

const someMethod = () => {};

export default [
  {
    examples: [
      <Card title="Title">
        Hello World
      </Card>,
    ],
  },
  {
    examples: [
      <Card title="Title" onClose={ someMethod } testSection="data-track-card-close">
        Hello World with closer element
      </Card>,
    ],
  },
  {
    examples: [
      <Card title="Title" >
        Blank card
      </Card>,
    ],
  },
  {
    examples: [
      <Card title="Title" shadow={ true }>
        Shadow
      </Card>,
    ],
  },
];
