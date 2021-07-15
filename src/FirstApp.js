import React from "react";
import PropTypes from "prop-types";

const FirstApp = ({ saludo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>This is a paragraph </p>
    </>
  );
};

FirstApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default FirstApp;
