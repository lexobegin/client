import React from "react";
import { Button, Icon } from 'antd';
import AgusLogo from '../../../assets/img/png/logo-white.png';
import { logout } from "../../../api/auth";

import "./MenuTop.scss";

export default function MenuTop(props) {
    //console.log(props);
    const { menuCollapsed, setMenuCollapsed } = props;

    const logoutUser = () =>{
        logout();
        window.location.reload();
        //console.log('desconectado...');
    }

    return (
        <div className="menu-top">
            <div className="menu-top__left">
            <img
                className="menu-top__left-logo"
                src={AgusLogo}
                alt="Alex Orellana"
            />
            <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)} >
                <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
            </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={logoutUser}>
                    <Icon type="poweroff" />
                </Button>
            </div>
        </div>
    );
}