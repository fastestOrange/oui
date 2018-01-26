import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Manager, Popper, Target } from 'react-popper';
import { withToggle } from '../../utils/recompose-utils';

const Dropdown = withToggle(({
  arrowIcon,
  buttonContent,
  children,
  hide,
  isDisabled = false,
  isOpen,
  fullWidth,
  placement = 'bottom-start',
  show,
  style,
  testSection,
  width = 200,
  zIndex = 999,
  toggle,
}) => {

  const groupClass = classNames(
    'oui-dropdown-group',
    { ['width--1-1']: fullWidth }
  );

  const buttonClass = classNames(
    'oui-button',
    { [`oui-button--${style}`]: style },
    { ['oui-button--full soft--left text--left']: fullWidth }
  );

  const iconClass = classNames(
    'push-half--left',
    {
      ['oui-arrow-inline--down']: arrowIcon === true || arrowIcon === 'down',
      ['oui-arrow-inline--left']: arrowIcon === 'left',
      ['oui-arrow-inline--right']: arrowIcon === 'right',
      ['oui-arrow-inline--up']: arrowIcon === 'up',
    }
  );

  return (
    <Manager
      data-ui-component={ true }
      className={ groupClass }
      data-test-section={ testSection }>
      <Target>
        <button
          type='button'
          className={ buttonClass }
          disabled={ isDisabled }
          onClick={ toggle }
          onBlur={ hide }>
          <div className='flex'>
            <div className='flex--1 truncate'>{ buttonContent }</div>
            {
              !!arrowIcon && arrowIcon !== 'none' && (
                <div className='text--right'><span className={ iconClass }></span></div>
              )
            }
          </div>
        </button>
      </Target>
      <Popper
        placement={ placement }
        className='oui-dropdown-children'
        style={{
          zIndex: zIndex,
          position: 'absolute',
          width: width,
          marginTop: 2,
          marginBottom: 2,
          boxShadow: '0 2px 3px rgba(0,0,0,.1)',
        }}
        onClick={ hide } >
        { isOpen && !isDisabled && children }
      </Popper>
    </Manager>
  );
});

Dropdown.propTypes = {
  /** Arrow icon direction:
    * - Defaults to 'none', which hides the arrow
    * - passing a prop value of false also hides the arrow
    * - passing a prop value of true uses down arrow
    */
  arrowIcon: PropTypes.oneOf([
    'down',
    'left',
    'none',
    'right',
    'up',
  ]),
  /** Button text, can be a string or element. */
  buttonContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** Dropdown contents, typically using the <Blocklist> component. */
  children: PropTypes.node.isRequired,
  /** Button width is either full or inline-block. */
  fullWidth: PropTypes.bool,
  /** Unused... */
  handleClick: PropTypes.func,
  /** Disable button. */
  isDisabled: PropTypes.bool,
  /** Popper placement property */
  placement: PropTypes.oneOf([
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ]),
  /** Button style, e.g. highlight, danger, outline. */
  style: PropTypes.string,
  /** For automated testing only. */
  testSection: PropTypes.string,
  /** Dropdown menu width, in pixels. */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Override default dropdown menu z-index. */
  zIndex: PropTypes.number,
};

Dropdown.defaultProps = {
  arrowIcon: 'none',
};

export default Dropdown;
