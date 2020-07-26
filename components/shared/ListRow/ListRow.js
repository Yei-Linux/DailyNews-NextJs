import React, { Fragment } from "react";

import CardComponent from "../../cardComponent/CardComponent";
import Question from "../../questionComponent/QuestionComponent";

const ListRow = ({ item, itemType }) => {
  return (
    <Fragment>
      {itemType == "card" ? (
        <CardComponent item={item} />
      ) : (
        <Question item={item}  type={'question'}/>
      )}
    </Fragment>
  );
};

export default ListRow;
