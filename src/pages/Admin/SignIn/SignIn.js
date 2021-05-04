import React from "react";
import { Layout, Tabs } from 'antd';
import { Redirect } from "react-router-dom";
import Logo from '../../../assets/img/png/logo-white.png';
import RegisterForm from '../../../components/Admin/RegisterForm';
import LoginForm from "../../../components/Admin/LoginForm";

import "./SignIn.scss";

export default function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;

    return (
        <Layout className="sing-in">
            <Content className="sing-in__content">
                <h1 className="sing-in__content-logo">
                    <img src={Logo} alt="Agustin Navarro"/>
                </h1>

                <div className="sing-in__content-tabs">
                    <Tabs type="card">
                        <TabPane tab={ <span>Entrar</span> } key="1">
                            <LoginForm />
                        </TabPane>
                        <TabPane tab={ <span>Nuevo Usuario</span> } key="2">
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    );
}