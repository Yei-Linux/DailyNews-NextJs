import React, { Fragment } from "react";
import { Layout, Input, Button } from "antd";

import SignInComponent from "../../signInComponent/SignInComponent";
import SignUpComponent from "../../signUpComponent/SignUpComponent";

import useCustomModal from "../../../hooks/useCustomModal";
import CustomModal from "../../shared/CustomModal/CustomModal";
import "./HeaderStyle.scss";

const { Search } = Input;
const { Header } = Layout;

const HeaderLayout = () => {
  const {
    isVisible: visibleModal1,
    toggleModal: toggleModal1
  } = useCustomModal();
  const {
    isVisible: visibleModal2,
    toggleModal: toggleModal2
  } = useCustomModal();

  return (
    <Fragment>
      <Header className="headerContainer">
        <div className="leftContainer"></div>
        <div className="rightContainer">
          <Search
            className="searchInput"
            placeholder="Search..."
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
          <div>
            <Button className="buttonSignIn" onClick={toggleModal1}>
              Sign In
            </Button>
            <Button className="buttonSignIn" onClick={toggleModal2}>
              Sign Up
            </Button>
          </div>
        </div>
      </Header>

      <CustomModal
        title={"Sign In"}
        isVisible={visibleModal1}
        toggleModal={toggleModal1}
      >
        <SignInComponent />
      </CustomModal>
      <CustomModal
        title={"Sign Up"}
        isVisible={visibleModal2}
        toggleModal={toggleModal2}
      >
        <SignUpComponent />
      </CustomModal>
    </Fragment>
  );
};

export default HeaderLayout;
