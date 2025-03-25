import { Carousel, Col, Row } from "antd";
import "./style2.css"
import slider11 from "../../img/slider11.jpg";
import slider1 from "../../img/slider1.jpg";
import slider33 from "../../img/slider33.jpg";
import slider4  from "../../img/slider4.jpg";
import slider55 from "../../img/slider55.jpg";
function Sliderr2() {

  return (
    <>
      <Row>
        <Col span={24}>
          <h1>See to get a clear idea about us</h1>
          <Carousel effect="fade" dots={true} autoplaySpeed={1000}  arrows autoplay >
            <div className="img2" >
              <img src={slider1}></img>
            </div>
            <div className="img2">
              <img src={slider11}></img>
            </div>
            <div className="img2">
              <img src={slider33}></img>
            </div>
            <div className="img2">
              <img src={slider4}></img>
            </div>
            <div className="img2">
              <img src={slider55}></img>
            </div>
          </Carousel>
        </Col>
      </Row>

    </>
  );
}
export default Sliderr2;