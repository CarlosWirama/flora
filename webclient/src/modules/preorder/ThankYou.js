'use strict';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div>
      Thank You
      <Link to={'/'} className="btn btn-large red fullwidth waves-effect waves-light" >
        Kembali ke awal
      </Link>
    </div>
  );
}
