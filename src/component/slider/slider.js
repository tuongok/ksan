import { Carousel, Col, Row } from "antd";
import './style1.css'
import slider11 from "../../img/slider11.jpg";
import slider111 from "../../img/slider111.jpg";
import slider33 from "../../img/slider33.jpg";
import slider4  from "../../img/slider4.jpg";
import slider55 from "../../img/slider55.jpg";
function Sliderr() {

  return (
    <>
      <Row>
        <Col span={24}>
          <h1>Option room</h1>
          <Carousel dots={false} slidesToShow={2} autoplaySpeed={1500} arrows autoplay >
          <div className="box">
                <img src={slider111}/>
                <div className="text">
                    <div className="title">Moder Home	</div>
                    <div className="price">from $75</div>
                </div>
            </div>
            <div className="box">
                <img src={slider11}/>
                <div className="text">
                    <div className="title"> Bright Room </div>
                    <div className="price">from $90</div>
                </div>
            </div>
            <div className="box">
                <img src={slider33}/>
                <div className="text">
                    <div className="title">Cozy Place	</div>
                    <div className="price">from $65</div>
                </div>
            </div>
            <div className="box">
                <img src={slider4}/>
                <div className="text">
                    <div className="title">Serenity Suite</div>
                    <div className="price">from $75</div>
                </div>
            </div>
            <div className="box">
                <img src={slider55}/>
                <div className="text">
                    <div className="title">Signature Suite</div>
                    <div className="price">from $80</div>
                </div>
            </div>
          </Carousel>
        </Col>
      </Row>
      {/* <Row>
        <Col span={24}>
          <h1>Option room</h1>
          <Carousel dots={false} slidesToShow={2} arrows autoplay >
            <div classNameName="img" >
              <img src={slider111}></img>
            </div>
            <div classNameName="img">
              <img src={slider11}></img>
            </div>
            <div classNameName="img">
              <img src={slider33}></img>
            </div>
            <div classNameName="img">
              <img src={slider4}></img>
            </div>
            <div classNameName="img">
              <img src={slider55}></img>
            </div>
          </Carousel>
        </Col>
      </Row> */}

    </>
  );
}
export default Sliderr;