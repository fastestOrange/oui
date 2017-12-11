import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DEFAULT_PADDING_PROP = 'default';
const HARD_PADDING_PROP = 'hard';
const SOFT_DOUBLE_PROP = 'soft-double';
const SOFT_HALF_PADDING_PROP = 'soft-half';

/**
 * Simple component often used to display supplemental information to contents
 * on a page.
 *
 * See `OverlayWrapper` component to position a popover on a page.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Popover = ({
  children,
  padding,
  testSection,
  title,
}) => {
  const popOverClasses = classNames({
    'oui-pop--over': true,
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
  });

  let popOverContentClasses = classNames({
    'oui-pop--over__content': true,
  });

  const shouldAddPaddingClass = padding !== DEFAULT_PADDING_PROP && [
    HARD_PADDING_PROP,
    SOFT_DOUBLE_PROP,
    SOFT_HALF_PADDING_PROP,
  ].includes(padding);

  if (shouldAddPaddingClass) {
    popOverContentClasses = classNames({
      'oui-pop--over__content': true,
      [padding]: true,
    });
  }

  return (
    <div
      data-oui-component={ true }
      className={ popOverClasses }
      style={{ display: 'block', opacity: 1, position: 'initial' }}
      data-test-section={ testSection }>
      <div className={ popOverContentClasses }>
        { title && (
          <div className="oui-pop--over__title">{ title }</div>
        ) }
        { children }
      </div>
    </div>
  );
};

Popover.propTypes = {
  /** Content that appears within the popover body */
  children: PropTypes.node.isRequired,
  /** Padding class or 'default' padding for the popover container */
  padding: PropTypes.oneOf([DEFAULT_PADDING_PROP, HARD_PADDING_PROP, SOFT_DOUBLE_PROP, SOFT_HALF_PADDING_PROP]),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Text describing the popover contents */
  title: PropTypes.string,
};

Popover.defaultProps = {
  padding: 'default',
};

export default Popover;
