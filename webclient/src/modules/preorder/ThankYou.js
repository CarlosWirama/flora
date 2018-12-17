'use strict';
import React from 'react';
import { Link } from 'react-router-dom';
import { FormWords } from 'constants/displayTexts';

export default function ThankYou() {
  return (
    <main style={{paddingTop:200}}>
      <div className="container">
        {FormWords.THANK_YOU}
        <br/><br/><br/>
        <Link to={'/'} className="btn btn-large red fullwidth waves-effect waves-light" >
          {FormWords.BACK_TO_HOME}
        </Link>
      </div>
    </main>
  );
}
