import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Span } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item>
        Good: <Span>{good}</Span>
      </Item>
      <Item>
        Neutral: <Span>{neutral}</Span>
      </Item>
      <Item>
        Bad: <Span>{bad}</Span>
      </Item>
      <Item>
        Total: <Span>{total}</Span>
      </Item>
      <Item>
        Positive feedback: <Span>{positivePercentage}%</Span>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
