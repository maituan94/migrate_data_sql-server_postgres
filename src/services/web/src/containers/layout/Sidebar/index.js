import React, { useState } from 'react'
import { Layout, Menu, Icon } from 'antd';
// import './Sidebar.scss'
const { Sider } = Layout


const menu = [
  {
    name: "Detergent",
    icon: "/icon/ic-detergent.svg",
    icon_hover: "/icon/ic-detergent_yellow.svg",
    href: "/"
  },
  {
    name: "Raw Material",
    icon: "/icon/ic-raw-material.svg",
    icon_hover: "/icon/ic-raw-material_yellow.svg",
    href: "/"
  },
  {
    name: "Raw Material Suppliers",
    icon: "/icon/ic-raw-material-supplier.svg",
    icon_hover: "/icon/ic-raw-material-supplier_yellow.svg",
    href: "/"
  },
  {
    name: "Raw Material Producers",
    icon: "/icon/ic-raw-material-producer.svg",
    icon_hover: "/icon/ic-raw-material-producer_yellow.svg",
    href: "/"
  },
  {
    name: "Detergent Producers",
    icon: "/icon/ic-detergent-producer.svg",
    icon_hover: "/icon/ic-detergent-producer_yellow.svg",
    href: "/"
  },
  {
    name: "Requests",
    icon: "/icon/ic-request.svg",
    icon_hover: "/icon/ic-request_yellow.svg",
    href: "/"
  }
]

const Sidebar = () => {
  const [collapsed, setcollapsed] = useState(false)

  const onCollapse = collapsed => {
    console.log(collapsed);
    setcollapsed(collapsed);
  };

  return (
    <Sider width={250} className="db-sidebar" theme="dark" collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo">
        <img alt="" src="/logo.svg" />
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {menu.map((item, idx) => (
          <Menu.Item key={idx}>
            <Icon component={()=>(<div>
              <img className="icon-menu" alt="" src={item.icon} />
              <img style={{ display: "none" }} className="icon-menu__hover" alt="" src={item.icon_hover} />
            </div>)}/>

            <span>{item.name}</span>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}

export default Sidebar;