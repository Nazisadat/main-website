import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./product.scss";
import { AiOutlineArrowDown, AiOutlineSearch } from "react-icons/ai";

export default function Product() {
  const [showul1, setshowul1] = useState<boolean>(false);
  const [showul2, setshowul2] = useState<boolean>(false);

  function toggleul1() {
    setshowul1(!showul1);
  }

  function toggleul2() {
    setshowul2(!showul2);
  }

  return (
    <div className="product">
      <Container className="product">
        <Row>
          <Col className="d-sm-none d-md-block" md={4}>
            <div className="filter">
              <ul>
                <li>Price Sort</li>
                <li>
                  Platform{" "}
                  <span
                    onClick={toggleul1}
                    className={`${showul1 ? "active-arrow" : ""}`}
                  >
                    <AiOutlineArrowDown />
                  </span>
                  <ul className={`${showul1 ? "has-expand" : " active-ul"}`}>
                    <li>
                      <input type="checkbox" /> Windows
                    </li>
                    <li>
                      <input type="checkbox" /> Mac
                    </li>
                  </ul>
                </li>
                <li>
                  Form Factor{" "}
                  <span
                    onClick={toggleul2}
                    className={`${showul2 ? "active-arrow" : ""}`}
                  >
                    <AiOutlineArrowDown />
                  </span>
                  <ul className={`${showul2 ? "has-expand" : " active-ul"}`}>
                    <li>
                      <input type="checkbox" /> 1U
                    </li>
                    <li>
                      <input type="checkbox" /> 2U
                    </li>
                    <li>
                      <input type="checkbox" /> 3U
                    </li>
                    <li>
                      <input type="checkbox" /> 5U
                    </li>
                  </ul>
                </li>
                <li>CPU Sockets</li>
                <li>Form Fatcor</li>
                <li>
                  Max Ram
                  <div className="slidecontainer">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      defaultValue="50"
                      className="slider"
                      id="myRange"
                    />
                    <p>
                      Value: <span id="demo"></span>
                    </p>
                  </div>
                </li>
              </ul>
              <button>APPLY</button>
            </div>
          </Col>
          <Col sm={12} md={8}>
            <Col
              xs={12}
              style={{
                backgroundColor: "white",
                margin: "20px 7px",
                borderRadius: "10px",
                border: "0px",
                padding: "20px 35px",
              }}
            >
              <Row>
                <Col xs={12} sm={4} md={2} className="colsearch">
                  <select className="selectSearch">
                    Category
                    <option> Server1</option>
                    <option> Server2</option>
                    <option>Server3</option>
                    <option>Server4</option>
                  </select>
                </Col>
                <Col xs={12} sm={8} md={10} className="colsearch">
                  <input type="text" className="textSearch"></input>
                  <span className="magnifier">
                    <AiOutlineSearch />
                  </span>
                </Col>
              </Row>

              <Row>
                <Col
                  xs={12}
                  style={{
                    marginTop: "15px",
                    paddingTop: "15px",
                    borderTop: "0.5px solid lightGray",
                  }}
                >
                  <ul className="listsearch">
                    <strong>Category</strong>

                    <li>Most Visited</li>
                    <li>Most Popular</li>
                    <li>The newest</li>
                    <li>Cheapest</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Col xs={12} sm={6} md={4} lg={4} style={{ padding: "0px" }}>
                <Col
                  xs={12}
                  className="productComponent"
                  style={{ padding: "0px" }}
                >
                  <Col xs={12} style={{ padding: "0px" }}>
                    <img
                      className="img-fluid"
                      src="https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Enterprise_Servers/PowerEdge/t440/dellemc_peT440_8x35_tower_bezel_lf.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=321&qlt=95,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=321,402"
                    ></img>
                  </Col>
                  <Col xs={12}>
                    <span style={{ float: "left" }}>
                      <strong>Green Case X85</strong>
                    </span>
                    <span style={{ float: "right" }}>
                      <strong>1200 $</strong>
                    </span>
                  </Col>
                  <Col>
                    <p className="p1">
                      Supprts:
                      <br /> Server3UChaissis <br /> CPUDualXeon
                      <br /> Scalable <br /> RAM mAx 2T <br />
                      Driver
                    </p>
                  </Col>
                  <Col xs={12}></Col>
                </Col>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
