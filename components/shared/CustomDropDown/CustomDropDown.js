import React, { useContext } from "react";
import { useRouter } from "next/router";

import { Menu, Dropdown, Avatar, Button, Icon } from "antd";
import { UserOutlined } from "@ant-design/icons";

import contextAuthentication from '../../../context/authentication/authenticationContext';

import { DropdownContainer } from "./CustomDropDownStyled";
import Cookie from "js-cookie";

const CustomDropDown = ({ userName, email }) => {
  const router = useRouter();
  const { setLogging } = useContext(contextAuthentication);
  const logout = () => {
    Cookie.remove("jwt");
    Cookie.remove("user_info");
    setLogging(false);
    router.push("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        {email}
      </Menu.Item>
      <Menu.Item key="2" onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <DropdownContainer>
        <Avatar
          shape="circle"
          size={45}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <p style={{ margin: 0, fontWeight: "bold" }}>{userName}</p>
      </DropdownContainer>
    </Dropdown>
  );
};

export default CustomDropDown;
