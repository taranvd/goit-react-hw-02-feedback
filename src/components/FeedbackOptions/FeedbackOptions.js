import { ButtonStyled } from './FeedbackOptions.style';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <ButtonStyled onClick={() => onLeaveFeedback('good')}>Good</ButtonStyled>
      <ButtonStyled onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </ButtonStyled>
      <ButtonStyled onClick={() => onLeaveFeedback('bad')}>Bad</ButtonStyled>
    </>
  );
};
