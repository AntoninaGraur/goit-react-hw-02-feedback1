import React from 'react';

import {
  FeedbackContainer,
  FeedbackTitle,
  FeedbackPositiveBtn,
  FeedbackNeutralBtn,
  FeedbackNegativeBtn,
  FeedbackBtnContainer,
  StatisticTitle,
  StatisticText
} from './Feedback/feedbackStatistic.styled';


import  { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  };

  return (
    <div>
      <FeedbackContainer>
        <FeedbackTitle>Please leave a feedback</FeedbackTitle>
        <FeedbackBtnContainer>
          <FeedbackPositiveBtn
            id="positiveBtn"
            type="submit"
            onClick={() => handleFeedback('good')}
          >
            Positive
          </FeedbackPositiveBtn>
          <FeedbackNeutralBtn
            id="neutralBtn"
            type="submit"
            onClick={() => handleFeedback('neutral')}
          >
            Neutral
          </FeedbackNeutralBtn>
          <FeedbackNegativeBtn
            id="negativeBtn"
            type="submit"
            onClick={() => handleFeedback('bad')}
          >
            Negative
          </FeedbackNegativeBtn>
        </FeedbackBtnContainer>
      </FeedbackContainer>

      <div>
        <StatisticTitle>Statistic</StatisticTitle>
        <StatisticText>Good: {feedback.good}</StatisticText>
        <StatisticText>Neutral: {feedback.neutral}</StatisticText>
        <StatisticText>Bad: {feedback.bad}</StatisticText>
      </div>
    </div>
  );
};


