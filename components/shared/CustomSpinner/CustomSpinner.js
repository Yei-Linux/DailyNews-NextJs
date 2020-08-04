import React, { useContext,Fragment } from "react";
import contextSpinner from "../../../context/spinner/spinnerContext";
import "./CustomSpinnerStyle.scss";

const CustomSpinner = () => {
  const { loading } = useContext(contextSpinner);

  return (
    <Fragment>
      {loading && (
        <div className="spinnerContainer">
          <div className="spinerContainerChild">
            <div className="loadingio-spinner-eclipse-5n0f6x31zyc">
              <div className="ldio-ikosai6h4e">
                <div></div>
              </div>
            </div>
            <div className="imageContainer">
              <img
                src="https://cdn0.iconfinder.com/data/icons/crime-protection-people/110/Hacker-512.png"
                alt=""
                className="imageSpinner"
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CustomSpinner;
