'use strict';

import React from "react";
import { Link } from "react-router-dom";

// import PageFooter from '../../components/pageFrame/PageFooter';

const path = '/webclient/src/components/PageFrame';
const PageFooter = () => (
  <footer className="page-footer">
    <div className="row container center">
      <h6>LET'S BE FRIEND</h6>
      <p>Follow us for Bouqtastic Updates</p>
      <a target="_blank" href="https://www.facebook.com/jcfleurbouquet93"><img className="icon" src={path + "/facebook.svg"}/></a>
      <a target="_blank" href="https://www.instagram.com/jcfleurbouquet"><img className="icon" src={path + "/instagram.svg"}/></a>
    </div>
    <div className="footer-copyright">
      <p className="container center">
        &copy; JC Fleur Bouquet 2017
      </p>
    </div>
  </footer>
);
export default PageFooter;