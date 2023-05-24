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




export class App extends React.Component {
  state = {
      feedback: { good: 0, neutral: 0, bad: 0 },
    };
  

  handleFeedback = (type) => {
    
    this.setState((prevState) => ({
      feedback: {
        ...prevState.feedback,
        [type]: prevState.feedback[type] + 1,
      },
      
    }));
  //  console.log(this.setState);
  };

  render() {
    const { feedback } = this.state;

    return (
      <div>
        <FeedbackContainer>
          <FeedbackTitle>Please leave a feedback</FeedbackTitle>
          <FeedbackBtnContainer>
            <FeedbackPositiveBtn
              id="positiveBtn"
              type="submit"
              onClick={() => this.handleFeedback('good')}
            >
              Positive
            </FeedbackPositiveBtn>
            <FeedbackNeutralBtn
              id="neutralBtn"
              type="submit"
              onClick={() => this.handleFeedback('neutral')}
            >
              Neutral
            </FeedbackNeutralBtn>
            <FeedbackNegativeBtn
              id="negativeBtn"
              type="submit"
              onClick={() => this.handleFeedback('bad')}
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
  }
}



