import React from 'react';
import PropTypes from 'prop-types';

const aStyle = {
  display: 'block',
  fontSize: '12px',
};

const Language = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <li>
      <a
        style={aStyle}
        href=""
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    </li>
  );
};

Language.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Language;
