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
    lat: 41.3851,
    lng: 2.1734,
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
      name: "",
      image: "",
      phone: "",
      location: {
        lat: 41.3917,
        lng: 2.1649,
      },
      type: "drink",
    },
    {
      name: "Location 3",
      location: {
        lat: 41.3773,
        lng: 2.1585,
      },
      type: "souvenir",
    },
    {
      name: "Location 4",
      location: {
        lat: 41.3797,
        lng: 2.1682,
      },
      type: "temple",
    },
  ];

  return (
    <div>
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
                      <Card
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
