import React from 'react';
import PropTypes from 'prop-types';

function ChallengeCriteria({ title, subtext, criteria }) {
  return (
    <li className="m-b-2">
      <h3 className="m-b-0">{title}</h3>
      {subtext && <p className="m-b-2">{subtext}</p>}
      <h4>Acceptance Criteria</h4>
      <ul>
        {criteria.map((text, index) => (
          <li>{text}</li>
        ))}
      </ul>
    </li>
  );
}

ChallengeCriteria.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subtext: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  criteria: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ChallengeCriteria;
