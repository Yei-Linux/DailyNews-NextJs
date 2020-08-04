import Reac, { Fragment } from "react";
import { HeaderTitleContainer } from "./CustomHeaderTitleStyled";
import "./CustomHeaderTitleStyle.scss";
import AddQuestion from "../../addQuestion/AddQuestion";

import { Button } from "antd";

import useCustomModal from "../../../hooks/useCustomModal";
import CustomModal from "../../../components/shared/CustomModal/CustomModal";

const CustomHeaderTitle = ({ title, buttonTitle, hasButton }) => {
  const {
    isVisible,
    toggleModal
  } = useCustomModal();

  return (
    <Fragment>
      <HeaderTitleContainer>
        <h3 className="title">{title}</h3>
        {hasButton && (
          <Button className="button" onClick={toggleModal}>
            {buttonTitle}
          </Button>
        )}
      </HeaderTitleContainer>

      <CustomModal
        title={buttonTitle}
        isVisible={isVisible}
        toggleModal={toggleModal}
      >
        <AddQuestion toggleModal={toggleModal} />
      </CustomModal>
    </Fragment>
  );
};

export default CustomHeaderTitle;
