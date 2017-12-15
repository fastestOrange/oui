import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TR = ({
  isActive,
  noBorder,
  borderStyle,
  backgroundColor,
  testSection,
  children,
}) => {
  let classes = classNames({
    'oui-table-row--active': isActive,
    'no-border': noBorder,
    [`border--${borderStyle}`]: borderStyle,
    [`background--${backgroundColor}`]: backgroundColor,
  });
  return (
    <tr
      className={ classes }
      data-test-section={ testSection }>
      { children }
    </tr>
  );
};

TR.propTypes = {
  /** Background color for each row */
  backgroundColor: PropTypes.oneOf(['faint', 'light']),
  /** Border style for each row */
  borderStyle: PropTypes.oneOf(['bottom', 'top', 'sides', 'ends', 'none']),
  /** Expects a `Table.TD` or `Table.TH` component */
  children: PropTypes.node,
  /** If true, add active class */
  isActive: PropTypes.bool,
  /** If true, add class to remove border */
  noBorder: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

TR.displayName = 'Table.TR';

export default TR;
