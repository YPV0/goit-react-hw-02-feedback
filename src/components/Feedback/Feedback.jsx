import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackWrapper, FeedbackButton } from './Feedback.styled';

export class Feedback extends React.Component {
  render() {
    const { options, onIncrement } = this.props;

    return (
      <FeedbackWrapper>
        {options.map(option => (
          <FeedbackButton
            key={option}
            name={option}
            onClick={() => onIncrement(option)}
          >
            {option}
          </FeedbackButton>
        ))}
      </FeedbackWrapper>
    );
  }
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onIncrement: PropTypes.func.isRequired,
};
