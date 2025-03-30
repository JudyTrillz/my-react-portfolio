import ClipLoader from "react-spinners/ClipLoader";
import propTypes from "prop-types";

import "./loader.scss";

const Loader = ({ message }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#00c6ff",
  };
  return (
    <div className="loader">
      <ClipLoader
        color="#00c6ff"
        // loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {message}
    </div>
  );
};

Loader.propTypes = {
  message: propTypes.string,
};

export default Loader;
