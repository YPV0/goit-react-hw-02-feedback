import styled from 'styled-components';

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
  }
`;
