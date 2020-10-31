import React from "react";
import { Row, Col, Layout, Menu, Breadcrumb, Card } from "antd";
import { GlobalOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Navbar from "../navbar/navbar";
import { createFromIconfontCN } from "@ant-design/icons";


const { Header, Content, Footer } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
function Contact() {
  return (
    <div style={{backgroundImage:`url(https://cdn.hipwallpaper.com/i/51/65/tJ73RL.jpg)`, height:"1000px"}}>
      <Navbar />
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Row style={{ marginTop: "50px" }}>
            <Card hoverable bordered={true} style={{ width: 500, marginRight: 100 }}>
              <h2>Contact Us</h2>
              <Row style={{ marginTop: "30px" }}>
                <GlobalOutlined
                  style={{ fontSize: "30px", color: "#3B5998" }}
                />
                <h3 style={{ marginLeft: "15px" }}>
                  Email: Chimomonono@gmail.com
                </h3>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <IconFont
                  type="icon-facebook"
                  style={{ fontSize: "28px", color: "#3B5998" }}
                />

                <h3 style={{ marginLeft: "15px" }}>
                  Facebook: Sirikorn Wiriyasookhatai
                </h3>
              </Row>
            </Card>
            <Card hoverable bordered={true} style={{ width: 500, marginRight: 100 }}>
              <h2>Developer</h2>

              <h3 style={{ marginLeft: "15px", marginTop: "30px" }}>
                1. Miss. Sirikorn wiriyasookhatai No.23
              </h3>
              <h3 style={{ marginLeft: "15px" }}>
                2. Miss. Natthamon Teekayupuk No.16
              </h3>
              <h3 style={{ marginLeft: "15px" }}>
                3. Miss. Suwanee Thumala No.26
              </h3>
              <h3 style={{ marginLeft: "15px" }}>
                4. Miss. Prakaikan Kaeoman No.18
              </h3>
              <h3 style={{ marginLeft: "15px" }}>
                5. Miss. Natcha Srisuk No.14
              </h3>
            </Card>
            
   
          </Row>
        </div>
      </Content>
    </div>
  );
}
export default Contact;
