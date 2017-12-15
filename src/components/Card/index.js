import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';
import Icon from 'react-oui-icons';

/**
 * Provide a basic card display which has a title and inner content
 * The card can have an optional close icon
 * @param {String} title - text for card title
 * @param {Function} onClose - method to fire when X is clicked
 * @param {Node} children - element for body
 * @param {String} testSection - string for testing
 * @returns {ReactElement}
 */
const Card = ({
  title,
  onClose,
  testSection,
  children,
  shadow = false,
}) => {
  const closer = (
    <Button style="unstyled" onClick={ onClose } data-test-section={ `${testSection}-close` }>
      <Icon name='close'/>
    </Button>
  );
  const shadowClassName = 'oui-shadow--light';
  const classes = classNames({
    'push--bottom border--all': true,
    [`${shadowClassName}`]: shadow,
  });

  return (
    <div
      data-oui-component={ true }
      className={ classes }>
      { title && (
        <div className="flex border--bottom background--faint soft soft-half--ends">
          <h4 className="flex--1" data-test-section={ `${testSection}-title` }>
            { title }
          </h4>
          <div className="">
            { onClose && closer }
          </div>
        </div>
      ) }
      <div className="soft" data-test-section={ `${testSection}-body` }>
        { children }
      </div>
    </div>
  );
};

Card.propTypes = {
  /** Elements that appears within the component */
  children: PropTypes.string.isRequired,
  /** method to invoke when a close element is clicked */
  onClose: PropTypes.func,
  /** Display a subtle shadow around card. */
  shadow: PropTypes.bool,
  /** For automated testing only. */
  testSection: PropTypes.string,
  /** What is the card title */
  title: PropTypes.string.isRequired,
};

export default Card;
