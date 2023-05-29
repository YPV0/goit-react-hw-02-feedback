import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsWrapper, Title, Statistic } from './Statistics.styled';

export class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StatisticsWrapper>
        <Title>Statistics</Title>
        <Statistic>Good: {good}</Statistic>
        <Statistic>Neutral: {neutral}</Statistic>
        <Statistic>Bad: {bad}</Statistic>
        <Statistic>Total: {total}</Statistic>
        <Statistic>
          Positive feedback: {total > 0 ? positivePercentage : 0}%
        </Statistic>
      </StatisticsWrapper>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
