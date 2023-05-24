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



export class App extends Component {
  state = {
    feedbackCount: {
      good: 0,
      neutral: 0,
      bad: 0
    }
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      feedbackCount: {
        ...prevState.feedbackCount,
        [type]: prevState.feedbackCount[type] + 1
      }
    }));
  };

  render() {
    const { feedbackCount } = this.state;

    return (
      <div>
        <FeedbackContainer>
          <FeedbackTitle>Please leave a feedback</FeedbackTitle>
          <FeedbackBtnContainer>
            <FeedbackPositiveBtn onClick={() => this.handleFeedback('good')} id="positiveBtn" type="submit">
              Positive
            </FeedbackPositiveBtn>
            <FeedbackNeutralBtn onClick={() => this.handleFeedback('neutral')} id="neutralBtn" type="submit">
              Neutral
            </FeedbackNeutralBtn>
            <FeedbackNegativeBtn onClick={() => this.handleFeedback('bad')} id="negativeBtn" type="submit">
              Negative
            </FeedbackNegativeBtn>
          </FeedbackBtnContainer>
        </FeedbackContainer>
        <div>
          <StatisticTitle>Statistic</StatisticTitle>
          <StatisticText>Good: {feedbackCount.good}</StatisticText>
          <StatisticText>Neutral: {feedbackCount.neutral}</StatisticText>
          <StatisticText>Bad: {feedbackCount.bad}</StatisticText>
        </div>
      </div>
    );
  }
}


