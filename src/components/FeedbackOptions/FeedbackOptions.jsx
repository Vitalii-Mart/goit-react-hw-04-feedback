import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBox, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {options.map(e => (
        <Button key={e} onClick={() => onLeaveFeedback(e)}>
          {e}
        </Button>
      ))}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
