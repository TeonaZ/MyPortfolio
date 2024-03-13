import React from 'react';
import PropTypes from 'prop-types';

function Heading(props) {
  return (
    <div className={props.cn}>
      <h1 className="secondary-heading">{props.title}</h1>
    </div>
  );
}

Heading.propTypes = {
  cn: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Heading;
