import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function FlightSearchText({ size = 'lg', children }) {
  const className = cx('m-v-0', {
    small: size === 'sm',
    fade: size === 'sm',
  });

  return <p className={className}>{children}</p>;
}

FlightSearchText.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg']).isRequired,
  children: PropTypes.node,
};

export default FlightSearchText;
