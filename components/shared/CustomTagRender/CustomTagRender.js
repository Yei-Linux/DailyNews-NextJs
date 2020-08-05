import { Tag } from "antd";
import { getColorOrValue } from "../../../helpers/ManagmentDataHelper";

const CustomTagRender = props => {
  const { label, value, closable, onClose } = props;

  return (
    <Tag
      color={getColorOrValue(value, 0)}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};

export default CustomTagRender;
