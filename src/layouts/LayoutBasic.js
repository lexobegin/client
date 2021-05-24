import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import MenuTop from "../components/Web/MenuTop";
//import Footer from "../components/Web/Footer";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  //console.log(props);
  const { routes } = props;
  //console.log(routes);
  const { Footer } = Layout;

  return (
    <>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <MenuTop />
        </Col>
        <Col lg={4} />
      </Row>
      <LoadRoutes routes={routes} />
      <Footer>Agustin Navarro</Footer>
    </>
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