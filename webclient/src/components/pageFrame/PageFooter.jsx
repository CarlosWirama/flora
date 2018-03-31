'use strict';

import React from "react";
import { Link } from "react-router-dom";

const path = '/webclient/src/components/PageFrame';
const PageFooter = () => (
  <footer className="page-footer hide-on-med-and-down">
    <div className="row container center">
      <h6>Visit our other channel</h6>
      <p>Follow us for Bouqtastic Updates</p>
      <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93"><img className="icon" src={path + "/facebook.svg"}/></a>
      <a target="_blank" href="https://www.instagram.com/jcfleurbouquet"><img className="icon" src={path + "/instagram.svg"}/></a>
    </div>
    <div className="footer-copyright">
      <p className="container center">
        &copy; JC Fleur Bouquet 2018
      </p>
    </div>
  </footer>
);
export default PageFooter;