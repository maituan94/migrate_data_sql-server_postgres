import React, { useState } from "react";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import { RingLoader } from "react-spinners";
import PocSimple from "../PocSimple";
import { Menu, Dropdown, Button, Icon, Input } from "antd";
import AddRawMaterial from "../modal/AddRawMaterial";


function RawMaterial({ loading }) {
  console.log(process.env.IOTMJira);
  const [visible, setVisible] = useState(false)
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  const showModal = () => {
    setVisible(true);
  }

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const { Search } = Input;

  return (
    <div className="">
      <LoadingOverlay
        active={loading}
        spinner={<RingLoader color="#FFED00" />}
        // text="Processing ..."
        styles={{
          wrapper: {
            overflow: "hidden"
          },
          overlay: base => ({
            ...base,
            zIndex: 1350
          })
        }}
      >
        <div className="raw-material">
          <div className="main-title">
            Raw Materials
          </div>
          <div className="filter-area">
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              className="filter-selection">
              <div className="ant-dropdown-link"><div className="dropdown-text">Detergent Formula</div><Icon type="caret-down" /></div>
            </Dropdown>
            <Dropdown overlay={menu} trigger={["click"]} className="filter-selection">
              <div className="ant-dropdown-link"><div className="dropdown-text">Filter</div><Icon type="caret-down" /></div>
            </Dropdown>
            <Search
              className="search-place"
              placeholder="Search..."
              onSearch={value => console.log(value)}
            />
            <Button className="add-raw-material" onClick={showModal}>
              <Icon className="add-icon" type="plus" />
              <div className="text">ADD RAW MATERIAL</div>
            </Button>
            <AddRawMaterial visible={visible} handleOk={handleOk} handleCancel={handleCancel}>
              ABC
            </AddRawMaterial>
          </div>
        </div>

        <PocSimple />
      </LoadingOverlay>
    </div>
  );
}
const mapStatetoProps = state => ({
  loading:
    state.loadingBar.default !== undefined && state.loadingBar.default !== 0
});
export default connect(mapStatetoProps)(RawMaterial);
