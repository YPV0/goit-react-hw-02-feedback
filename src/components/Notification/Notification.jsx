import React from 'react';
import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled';

export class Notification extends React.Component {
  render() {
    const { message } = this.props;

    return <NotificationMessage>{message}</NotificationMessage>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
