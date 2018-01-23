import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withToggle } from '../../utils/recompose-utils';

const Disclose = withToggle(({
  isOpen,
  children,
  headerStyle,
  childrenStyle,
  title,
  toggle,
}) => {
  const contentClass = classNames(
    'oui-disclose__content',
    {
      ['border--sides border--bottom']: childrenStyle === 'border',
      ['border--bottom']: childrenStyle === 'divider' && isOpen,
    }
  );
  const linkClass = classNames(
    'oui-disclose__link link--dark soft-half flush',
    {
      ['background--faint display--block']: headerStyle === 'header',
      ['border--all background--faint display--block']: headerStyle === 'header-bordered',
    }
  );
  const arrow = isOpen ? 'oui-disclose is-active' : 'oui-disclose';
  return (
    <div className={ arrow } style={{marginTop: '-1px'}}>
      <a onClick={ toggle } className={ linkClass }>
        <div className='oui-disclose__arrow'>
          <span className="oui-disclose__symbol push-half--right"></span>
          { title }
        </div>
      </a>
      <div className={ contentClass }>
        { isOpen && children }
      </div>
    </div>
  );
});

Disclose.propTypes = {
  children: PropTypes.node.isRequired,
  childrenStyle: PropTypes.string,
  headerStyle: PropTypes.string,
  noBorder: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Disclose;
