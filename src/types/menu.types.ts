import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import { FunctionComponent } from "react";

export interface IMenus {
    name:      string;
    url:       string;
    icon?:      FunctionComponent<AntdIconProps>;
    access?:    string[];
    children?: IMenus[];
}

