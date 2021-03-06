'use strict';
import React from 'react';
import { Link } from 'react-router-dom';
import { ThankYouForOrderWords } from 'constants/displayTexts';

export default function ThankYou() {
  return (
    <main style={{paddingTop:200}}>
      <div className="container">
        {ThankYouForOrderWords.THANK_YOU}
        <br/><br/><br/>
        <Link to={'/'} className="btn btn-large red fullwidth waves-effect waves-light" >
          {ThankYouForOrderWords.BACK_TO_HOME}
        </Link>
      </div>
    </main>
  );
}
