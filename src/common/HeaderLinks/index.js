import "./styles.scss";

import React from "react";
import PropTypes from "prop-types";


function Links(linkTitle) {
  return (
        <button className="links-container__title">
          {linkTitle.linkTitle}
        </button>
  );
}

Links.propTypes = {linkTitle:PropTypes.object};
export default Links;
