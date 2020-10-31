import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Sider } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function Navbar() {
  return (
    <div>
      <Menu mode="horizontal" style={{height:"70px"}}>
        <Menu.Item key="icon" style={{marginTop:"10px"}}>
          <h2>UBON TRAVEL</h2>
        </Menu.Item>
        <Menu.Item key="mail" style={{marginBottom:"10px"}}>
          <a href="/">Home</a>
        </Menu.Item>
        {/* <SubMenu title={<span>Blogs</span>} style={{marginBottom:"10px"}}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu> */}
        <Menu.Item key="alipay" style={{marginBottom:"10px"}}>
          <a href="/contact">Contact Us</a>
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default Navbar;
