import "./styles.scss";

import React from "react";
import iconSet from "../../assets/fonts/icoMoonSets/selection.json";
import PropTypes from "prop-types";
import IcomoonReact from "icomoon-react";
import TPAY from "../../assets/imgs/TPAY.jpg";

function Header(links) {
  return (
    <>
  
    <nav className="header-container">
    <img src={TPAY} alt='tpay'/>
    <span>
         <IcomoonReact
        className="header-container__searchIcon"
        icon="searchIcon"
        iconSet={iconSet}
        size=".75rem"
        color="#1B3461"
      />
      <IcomoonReact
        icon="more"
        iconSet={iconSet}
        size=".75rem"
        color="#1B3461"
        onClick={links.links}
      />
    </span>
   
    </nav>
    </>
  );
}

Header.propTypes = {links:PropTypes.any};
export default Header;
