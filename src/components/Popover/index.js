import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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

  if (padding) {
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
      <div className={popOverContentClasses}>
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
  /** Padding class for the popover */
  padding: PropTypes.oneOf([PropTypes.bool, 'soft-half', 'hard', 'soft-double']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Text describing the popover contents */
  title: PropTypes.string,
};

Popover.defaultProps = {
  padding: false,
};

export default Popover;
