import React, { Fragment } from "react";

import CardComponent from "../../cardComponent/CardComponent";
import QuestionComponent from "../../questionComponent/QuestionComponent";

const ListRow = ({ item, itemType }) => {
  return (
    <Fragment>
      {itemType == "card" ? (
        <CardComponent item={item} />
      ) : (
        <QuestionComponent item={item} />
      )}
    </Fragment>
  );
};

export default ListRow;
