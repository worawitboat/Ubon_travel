import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Row, Col, Layout, Card, Image } from "antd";
import Navbar from "../navbar/navbar";
import { useLocation } from "react-router-dom";

const mapStyles = {
  width: "700px",
  height: "700px",
};
// const defaultCenter = {
//   lat: 41.3851,
//   lng: 2.1734,
// };

const gridStyle = {
  width: "700px",
};

const { Header, Content, Footer } = Layout;

function Store() {
  const location = useLocation();
  const [selected, setSelected] = useState({});
  const [defaultCenter, setdefaultCenter] = useState({
    lat: 15.3511565,
    lng: 104.6255423,
  });

  const onSelect = (item) => {
    setSelected(item);
  };

  const panTo = (position) => {
    setdefaultCenter(position);
  };

  const locations = [
    {
      name: "ข้าวต้มสันติ โภชนา",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNE6R5c9KbiLIEAtzHNeu7gdGx5E34ifKI06yL4=w408-h306-k-no",
      phone: "045262233 ",
      location: {
        lat: 15.2356106,
        lng: 104.8556345,
      },
      type: "food",
    },
    {
      name: "ข้าวต้มเศรษฐี ",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMjv9NQ_BEX0oAwMpQcGzEK5dORTSnaJq1kUSJT=w408-h272-k-no",
      phone: "045994079",
      location: {
        lat: 15.27175,
        lng: 104.8387182,
      },
      type: "food",
    },

    {
      name: "ฟองเบียร์",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipM1CvSIecnoMOihtswVuVd0IFbU7EnBIKDx40Dk=w408-h306-k-no",
      phone: "0801510696",
      location: {
        lat: 15.1994499,
        lng: 104.8653097,
      },
      type: "food",
    },
    {
      name: "ครัวเรือนแพ",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMuPqDpFD1i_kYEIXXxajSzWx-72epqPbsZLGrd=w408-h306-k-no",
      phone: "0815930303",
      location: {
        lat: 15.222224,
        lng: 104.8573043,
      },
      type: "food",
    },
    {
      name: "นมนัวร์",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipPlus6l3spESyZ_4EyxL4xQ7-0mhFG0J8lrPBeF=w408-h306-k-no",
      phone: "0958834383",
      location: {
        lat: 15.2502794,
        lng: 104.8326564,
      },
      type: "drink",
    },
    {
      name: "อัมพุช คอฟฟี่",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipM-sCrJMxqCF68lk-fNjCJNPAnRRHg7J_ziHqd7=w426-h240-k-no",
      phone: "045958211",
      location: {
        lat: 15.2502004,
        lng: 104.8315898,
      },
      type: "drink",
    },
    {
      name: "ISAN cafe",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipOSLdF0dq7Grfpbuxyk-PXxTnoKlpPAdLWsJQB_=w408-h306-k-no",
      phone: "0947293949",
      location: {
        lat: 15.2502793,
        lng: 104.8260903,
      },
      type: "drink",
    },
    {
      name: "TIME CAFE in The garden",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipPMf3cH2A8n7HQXaW_ZfJZ_YlgVlImBkIAeLpt_=w408-h408-k-no",
      phone: "0827477271",
      location: {
        lat: 15.2375883,
        lng: 104.8323638,
      },
      type: "drink",
    },
    {
      name: "ดาวทอง ของฝากอุบล",
      image:
        "https://www.naubon.com/wp-content/uploads/2020/06/78135155_711704942571679_8536921136355606528_o-600x400.jpg",
      phone: "045255131",
      location: {
        lat: 15.329395099999997,
        lng: 105.54096,
      },
      type: "souvenir",
    },
    {
      name: "ณ อุบล ของฝากเมืองอุบล",
      image: "https://f.ptcdn.info/302/027/000/1420860418-p176vcuin8-o.jpg",
      phone: "0894258543",
      location: {
        lat: 15.2801489,
        lng: 104.890194,
      },
      type: "souvenir",
    },
    {
      name: "หมูยอ กิมลั้ง สุดยอดของฝากเมืองอุบล",
      image:
        "https://photo-5.megazy.com/ms/article/9f427010-9d3d-4128-8c82-0ca723d10199.jpeg",
      phone: "0896671223",
      location: {
        lat: 15.4792393,
        lng: 104.3911285,
      },
      type: "souvenir",
    },
    {
      name: "ฟาร์มฮักป.อุบล ทุ่งเกษม",
      image:
        "https://static.airmosphere.net/upload/images/users/3983/post/3731/5ca5c946e76f8_3983.jpeg",
      phone: "045210747",
      location: {
        lat: 15.4195318,
        lng: 104.3949053,
      },
      type: "souvenir",
    },
    {
      name: "วัดหนองป่าพง",
      image:
        "https://lh5.googleusercontent.com/p/AF1QipNWZR_W_1sk5RHc50H6P0YhxY_q38HoXaQR8pFK=w408-h287-k-no",
      phone: "045-322729",
      location: {
        lat: 15.158794,
        lng: 104.8267877,
      },
      type: "temple",
    },
    {
      name: "วัดสิรินธรวราราม",
      image:
        "https://cms.dmpcdn.com/travel/2020/02/06/6fe069c0-48b5-11ea-aaf1-b194952b8361_original.jpg",
      phone: "045243770",
      location: {
        lat: 15.1504474,
        lng: 105.4649393,
      },
      type: "temple",
    },
    {
      name: "วัดพระธาตุหนองบัว",
      image:
        "https://www.paiduaykan.com/travel/wp-content/uploads/2019/12/DEW_6683-800x533.jpg",
      phone: "0831258295",
      location: {
        lat: 15.2633372,
        lng: 104.8368246,
      },
      type: "temple",
    },
    {
      name: "วัดทุ่งศรีเมือง",
      image:
        "https://f.tpkcdn.com/review-source/b29c3d47-ebd0-edc8-7864-529c3b2a28cd.jpg",
      phone: "-",
      location: {
        lat: 15.229869,
        lng: 104.861477,
      },
      type: "temple",
    },
  ];

  return (
    <div style={{
        backgroundImage: `url(https://cdn.hipwallpaper.com/i/51/65/tJ73RL.jpg)`,
        height: "1000px",
      }}>
      <Navbar />

      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Row>
            <Col style={{ marginRight: "30px" }}>
              <Card title="All Locations">
                {locations.map((item) => {
                  if (location.state.type === item.type) {
                    return (
                      <a>
                        <Card
                          hoverable
                          style={gridStyle}
                          onClick={() => {
                            panTo(item.location);
                          }}
                        >
                          <Row>
                            <Image width={100} src={item.image} />
                            <div style={{ marginLeft: "20px" }}>
                              <h3>Name: {item.name}</h3>
                              <h3>Phone: {item.phone}</h3>
                            </div>
                          </Row>
                        </Card>
                      </a>
                    );
                  }
                })}
              </Card>
            </Col>
            <Col>
              <LoadScript googleMapsApiKey="AIzaSyBJWuQmrf6UgrkGbMJF6-m1GwTZrazBFBo">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={13}
                  center={defaultCenter}
                >
                  {locations.map((item) => {
                    if (location.state.type === item.type) {
                      return (
                        <Marker
                          key={item.name}
                          position={item.location}
                          onClick={() => onSelect(item)}
                        />
                      );
                    }
                  })}
                  {selected.location && (
                    <InfoWindow
                      position={selected.location}
                      clickable={true}
                      onCloseClick={() => setSelected({})}
                    >
                      <p>{selected.name}</p>
                    </InfoWindow>
                  )}
                </GoogleMap>
              </LoadScript>
            </Col>
          </Row>
        </div>
      </Content>
    </div>
  );
}
export default Store;
