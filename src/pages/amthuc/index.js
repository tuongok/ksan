import { Carousel } from "antd";
import slider1 from "../../img/room1.jpg";
import slider2 from "../../img/room2.jpg";
import slider3 from "../../img/room3.jpg";
import slider4 from "../../img/room4.jpg";
import slider5 from "../../img/room5.jpg";
import "./Sliderr.css";
import { NavLink } from "react-router-dom";
import InteractiveRoom from "../test";
import { Badge, Card, Space } from 'antd';


function Blog() {
  return (
    <>
      <div className="carousel-container">
        <Carousel
          dots={false}
          slidesToShow={4}
          slidesToScroll={1}
          autoplaySpeed={1500}
          arrows
          autoplay
          centerMode={false}
          infinite={true}
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
          ]}
        >
          {[slider1, slider2, slider3, slider4, slider5].map((img, index) => (
            <div key={index} className="carousel-item-wrapper">
              <Badge.Ribbon text="VIP" color="purple">
                <Card  size="large">
                <div className="carousel-item">
                <div className="carousel-item-image"><img src={img} alt={`Room ${index + 1}`} /></div>
                <div className="text">
                  <div className="title">
                    {["Modern Home", "Bright Room", "Cozy Place", "Serenity Suite", "Signature Suite"][index]}
                  </div>
                  <NavLink to="/room">
                    <span className="price">Moree</span>
                  </NavLink>
                </div>
              </div>
                </Card>
              </Badge.Ribbon>
              
            </div>
          ))}
        </Carousel>
      </div>

    </>
  );
}

export default Blog;