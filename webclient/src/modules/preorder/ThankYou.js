'use strict';
import React from 'react';
import { Link } from 'react-router-dom';
import { FormWords } from 'constants/displayTexts';

export default function ThankYou() {
  return (
    <div className="container" style={{paddingTop:200}}>
      {FormWords.THANK_YOU}
      <Link to={'/'} className="btn btn-large red fullwidth waves-effect waves-light" >
        {FormWords.BACK_TO_HOME}
      </Link>
    </div>
  );
}
