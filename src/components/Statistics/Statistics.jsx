import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  Title,
  Statistic,
  StatisticAmount,
} from './Statistics.styled';

export class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StatisticsWrapper>
        <Title>Statistics</Title>
        <Statistic>
          Good: <StatisticAmount> {good}</StatisticAmount>
        </Statistic>
        <Statistic>
          Neutral: <StatisticAmount>{neutral}</StatisticAmount>
        </Statistic>
        <Statistic>
          Bad: <StatisticAmount>{bad}</StatisticAmount>
        </Statistic>
        <Statistic>
          Total: <StatisticAmount>{total}</StatisticAmount>
        </Statistic>
        <Statistic>
          Positive feedback:{' '}
          <StatisticAmount>
            {total > 0 ? positivePercentage : 0}%
          </StatisticAmount>
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
