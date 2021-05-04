import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
    //console.log(props);
    const { routes } = props;
    //console.log(routes);
    const { Content, Footer } = Layout;

    return (
        <Layout>
            <h2>Menu....</h2>
            <Layout>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>Alex Orellana</Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes({ routes }) {

    return (
        <Switch>
           {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))} 
        </Switch>
    );
}