import { MenuProps } from "antd";
import { IMenus } from "../types/menu.types";
import React, { FunctionComponent } from "react";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";

export const generateMenu =(menus: IMenus[], role:string)=>{
    const filteredMenus = menus.filter((item)=> item.access?.includes(role))
    return   filteredMenus.map((item) => {
        let children: MenuProps['items'] = []
        if (item.children?.length) {
          children = item.children.map((item2) => ({
            key: item2.url,
            label: item2.title,
          }))
        }
        return {
          key: item.url,
          icon: React.createElement(item.icon as FunctionComponent<AntdIconProps>),
          label: item.title,
          children: item.children?.length ? children : '',
        }
      })
}