import React from "react";
import { Card } from "antd";
import Navbar from "../navbar/navbar";
import { Row, Col, Divider } from "antd";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

function Main() {
  return (
    <div
      style={{
        backgroundImage: `url(https://cdn.hipwallpaper.com/i/51/65/tJ73RL.jpg)`,
        height: "1000px",
      }}
    >
      <Navbar />
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Row justify="center" style={{ marginTop: "50px" }}>
          <Link to="/store" state={{ type: "food" }}>
            <Card
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  alt="example"
                  src="https://img.wongnai.com/p/432x432/2018/05/14/78a4e5e29eb04c9cae6b9763b497c39d.jpg"
                />
              }
            >
              <Meta title="Food Shop" />
            </Card>
          </Link>
          <Link to="/store" state={{ type: "drink" }}>
            <Card
              hoverable
              style={{ width: 260, marginLeft: 50 }}
              cover={
                <img
                  alt="example"
                  src="https://www.paiduaykan.com/travel/wp-content/uploads/2020/08/%E0%B9%81%E0%B8%AA%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B9%82%E0%B8%AE%E0%B8%A1%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%882.jpg"
                />
              }
            >
              <Meta title="Drink Shop" />
            </Card>
          </Link>
        </Row>
        <Row justify="center" style={{ marginTop: "100px" }}>
          <Link to="/store" state={{ type: "souvenir" }}>
            <Card
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  alt="example"
                  src="https://f.ptcdn.info/959/060/000/pihesenvjUjtN80S4GX-o.jpg"
                />
              }
            >
              <Meta title="Souvenir Shop" />
            </Card>
          </Link>
          <Link to="/store" state={{ type: "temple" }}>
            <Card
              hoverable
              style={{ width: 260, marginLeft: 50 }}
              cover={
                <img
                  alt="example"
                  src="https://img.wongnai.com/p/432x432/2018/06/12/4803f6b863de49698ab7da11deeda46e.jpg"
                />
              }
            >
              <Meta title="Temple" />
            </Card>
          </Link>
        </Row>
      </Content>
    </div>
  );
}
export default Main;
