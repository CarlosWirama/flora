import React from "react";
import styled from "styled-components";
import { CardFormWords } from 'constants/displayTexts';

export default function CardFormLayout({
  inputState,
  onInputChange,
  onSubmit,
  onRadioCheckboxChanged,
  cardAreaClicked,
  refCardContent,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="row container">
        <h5>{CardFormWords.GREETING_CARD}</h5>

        <div className="input-field col s12">
          <input id="dontUseCard" name="dontUseCard" type="checkbox"
            onChange={onRadioCheckboxChanged}
            checked={inputState.dontUseCard} className="filled-in" />
          <label htmlFor="dontUseCard">{CardFormWords.DONT_USE_CARD}</label>
        </div>

        <div className="input-field col s12">
          <input id="requestBlankCard" name="requestBlankCard" type="checkbox"
            onChange={onRadioCheckboxChanged}
            checked={inputState.requestBlankCard} className="filled-in" />
          <label htmlFor="requestBlankCard">{CardFormWords.REQUEST_BLANK_CARD}</label>
        </div>

        <div className="input-field col s12" onClick={cardAreaClicked}>
          <textarea name="cardContent" className="materialize-textarea"
            onChange={onInputChange}
            disabled={inputState.dontUseCard || inputState.requestBlankCard}
            ref={refCardContent} />
        </div>

        <SubmitButtonContainer className="col s12">
          <input type="submit"
            className="btn btn-large red fullwidth waves-effect waves-light"
            value={CardFormWords.NEXT}
          />
        </SubmitButtonContainer>
      </div>
    </form>
  );
}

const SubmitButtonContainer = styled.div`
  margin-top: 20;
  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;