import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  margin: 0 auto;
  padding: 20px 20px;
`;

export const FeedbackBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`;

export const FeedbackTitle = styled.h2`
  font-size: 50px;
  color: #232828;
  text-align: center;
`;
export const FeedbackPositiveBtn = styled.button`
  width: 130px;
  height: 60px;
  border-radius: 18px;
  color: #091035;
  background-color: #2be92b7d;
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    &:hover {
   
    transform: scale(1.02);
    text-shadow: 1px 1px 2px whitesmoke;
  }
`;
export const FeedbackNeutralBtn = styled.button`
  width: 130px;
  height: 60px;
  border-radius: 18px;
  color: #091035;
  background-color: #19e0d670;
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
   &:hover {
    
    transform: scale(1.02);
    text-shadow: 1px 1px 2px whitesmoke;
  }
`;

export const FeedbackNegativeBtn = styled.button`
  width: 130px;
  height: 60px;
  border-radius: 18px;
  color: #091035;
  font-size: 24px;
  background-color: #ed0f0fbf;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
   &:hover {
   
    transform: scale(1.02);
    text-shadow: 1px 1px 2px whitesmoke;
  }
`;

export const StatisticTitle = styled.h2`
  font-size: 50px;
  color: #232828;
  text-align: center;
`;

export const StatisticText = styled.p`
font-size: 45px;
font-weight: 400;
text-align: center;
`;