import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, SectionTitle } from './Section.styled';

export class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWrapper>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
