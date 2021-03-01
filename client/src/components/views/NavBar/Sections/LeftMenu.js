import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="summoner">
      <a href="/summoner">전적 검색</a>
    </Menu.Item>
    <Menu.Item key="summoner">
      <a href="/maketeam">팀 구성</a>
    </Menu.Item>
    <SubMenu title={<span>5대5</span>}>
      <MenuItemGroup title="팀 구성">
        <Menu.Item key="setting:1" href="/maketeam">팀 구성</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="게임 매칭">
        <Menu.Item key="setting:2">게임 매칭</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu