import React from 'react';

/* eslint-disable max-len */
const ToolbarDevToolsIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/toolbar-dev-tools-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ToolbarDevToolsIcon = (props) => {
  let Svg;
  let sizeclass;

  switch (props.size) {
    case 24:
      Svg = ToolbarDevToolsIcon24;
      sizeclass = 'oui-icon--24';
      break;
    default:
      Svg = ToolbarDevToolsIcon24;
      sizeclass = `oui-icon--${ props.size }`;
  }

  return (
    <Svg
      data-oui-component={ true } className={ 'oui-icon display--inline ' + sizeclass }
      data-test-section={ props.testSection }
    />
  );
};

ToolbarDevToolsIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([12, 16, 24]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ToolbarDevToolsIcon;
