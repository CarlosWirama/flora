import React from "react";
import { Link } from "react-router-dom";
import { CardFormWords } from 'constants/displayTexts';

export default function CardForm({
  onSubmit, onRadioCheckboxChanged, inputState, cardAreaClicked, onInputChange,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="row container">
        <h5>{CardFormWords.GREETING_CARD}</h5>

        <div className="input-field col s12">
          <input id="dontUseCard" name="dontUseCard" type="checkbox"
            onChange={onRadioCheckboxChanged}
            checked={inputState.dontUseCard} class="filled-in" />
          <label htmlFor="dontUseCard">{CardFormWords.DONT_USE_CARD}</label>
        </div>

        <div className="input-field col s12">
          <input id="requestBlankCard" name="requestBlankCard" type="checkbox"
            onChange={onRadioCheckboxChanged}
            checked={inputState.requestBlankCard} class="filled-in" />
          <label htmlFor="requestBlankCard">{CardFormWords.REQUEST_BLANK_CARD}</label>
        </div>

        <div className="input-field col s12" onClick={cardAreaClicked}>
          <textarea name="cardContent" className="materialize-textarea"
            value={inputState.cardContent} onChange={onInputChange}
            disabled={inputState.dontUseCard || inputState.requestBlankCard}
            ref="cardContent">
          </textarea>
        </div>

        <div className="col s12" style={{marginTop: 10}}>
          <Link to={"/form/delivery"} className="btn btn-large red fullwidth waves-effect waves-light" >
            {CardFormWords.NEXT}
          </Link>
        </div>
      </div>
    </form>
  );
}