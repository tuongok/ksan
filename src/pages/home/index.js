
import "./style.css"
import video from "../../img/park_hyatt_saigon_mast.webm";
import { Row, Col, Select } from 'antd';
import { WifiOutlined, DiscordOutlined, CoffeeOutlined, DownCircleOutlined, ClockCircleOutlined, CustomerServiceOutlined, SafetyOutlined, ShoppingCartOutlined, MailOutlined, BaiduOutlined, AlertOutlined, ShoppingOutlined, CameraOutlined, DribbbleOutlined } from '@ant-design/icons';
import s1 from "../../img/service1.jpg";
import s2 from "../../img/service2.jpg";
import s3 from "../../img/service3.jpg";
import s4 from "../../img/service4.jpg";
import Blog from "../amthuc/index.js";
import m1 from "../../img/m1.jpg";
import m2 from "../../img/m2.jpg";
import m3 from "../../img/m3.jpg";
import m4 from "../../img/m4.jpg";
import m5 from "../../img/m5.jpg";
import m6 from "../../img/m6.jpg";
import m7 from "../../img/m7.jpg";
import m8 from "../../img/m8.jpg";
import m9 from "../../img/m9.jpg";
function Home() {
    return (
        <>  <div className="body">
            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <div className="video">
                    <Col span={24} >

                        <video className="video" width="100%" src={video} autoPlay loop muted controls />
                    </Col>
                </div>
            </Row>

            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={9}>
                    <div className="section1">
                        <div className="title">Tự tin là khách sạn hàng đầu TP Hồ Chí Minh </div>
                        <span className="desc">Khám phá sự sang trọng của đô thị với sự kết hợp của thiết kế tinh vi, các chi tiết thủ công và tiện nghi thời hiện đại tại Tuong. Thưởng thức các nhà hàng đẳng cấp thế giới ở thành phố Hồ Chí Minh và spa yên tĩnh của chúng tôi. Tuong mong muốn được chào đón bạn với dịch vụ ấm áp và trang nghiêm cho trải nghiệm xa xỉ cá nhân cuối cùng..</span>
                    </div>
                </Col>
            </Row>
            <div className="section33"><Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={19} >
                    <div className="section3">
                        <div className="room">Phòng của chúng tôi</div>
                        <Blog />
                    </div>
                </Col>
            </Row>
            </div>


            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={16}>
                    <div className="section2">
                        <div className="text">Tiện ích cơ bản của khách sạn</div>
                        <div className="desc-container">
                            <span className="desc">Tận hưởng dịch vụ khách vượt trội, với một loạt các tiện nghi như Spa, wifi, room, pet, safety ,sport nhân viên đa ngôn ngữ và trao đổi ngoại tệ. Đối với các chuyên gia hiện đại, một trung tâm kinh doanh đầy đủ dịch vụ tại chỗ có sẵn để đáp ứng tất cả các nhu cầu của bạn-bất kể lớn hay nhỏ.</span>
                        </div>
                        <Row className="iconsmain" gutter={[16, 16]}>
                            <Col className="icon" span={4}><WifiOutlined /> <p>Wifi</p> </Col>
                            <Col className="icon" span={4}><SafetyOutlined /> <p>Safety</p> </Col>
                            <Col className="icon" span={4}> <CoffeeOutlined /><p>Coffe</p></Col>
                            <Col className="icon" span={4}> <ShoppingOutlined /><p>Shopping</p></Col>
                            <Col className="icon" span={4}> <ClockCircleOutlined /><p>Time</p></Col>
                            <Col className="icon" span={4}><CustomerServiceOutlined /> <p>Service</p> </Col>
                            <Col className="icon" span={6}><BaiduOutlined /><p>Pet</p> </Col>
                            <Col className="icon" span={6}><AlertOutlined /><p>warning</p></Col>
                            <Col className="icon" span={6}><CameraOutlined /> <p>Chụp ảnh</p></Col>
                            <Col className="icon" span={6}><DribbbleOutlined /><p>Sport</p> </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <div className="section44">
                <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                    <Col span={20} >
                        <div className="section4">
                            <div className="title">Đa dạng dịch vụ</div>
                            <div className="img-main">
                                <div className="box1">
                                    <div className="img1"><img src={s1}></img></div>
                                    <div className="img2">
                                        <div className="img21"><img src={s2}></img></div>
                                        <div className="img22"><img src={s3}></img></div>
                                    </div>
                                </div>
                                <div className="box2">
                                    <div className="box21"><img src={s4}></img></div>
                                    <div className="box22">
                                        <div className="descc1"><i>Sự quyến rũ vượt thời gian của du lịch trong khu phố cũ của Hồ Chí Minh</i></div>
                                        <span className="descc2">Với một lịch sử phong phú như một biểu tượng toàn cầu của lòng hiếu khách, khách sạn Tuong cung cấp một sự hợp nhất tinh tế của sự ấm áp và quyến rũ của phương Tây và phương Tây. Ẩn mình ở trung tâm của khu phố cũ của Hà Nội, nó tỏa ra một bầu không khí vĩ đại cổ điển vô song và sự thanh lịch vượt thời gian, mang lại trải nghiệm trong đó truyền thống đáp ứng sự tinh tế</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="section55">
                <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                    <Col span={19} >
                        <div className="titlee"><i>Lưu trữ những khoảnh khắc</i></div>
                        <div className="section5">
                            <div className="box">
                                <div className="box1">
                                    <div className="box11"><img src={m1} ></img></div>
                                    <div className="box12"><img src={m2} ></img></div>
                                </div>
                                <div className="box2">
                                    <div className="box21"><img src={m3} ></img></div>
                                    <div className="box22"><img src={m4}></img></div>
                                </div>
                            </div>
                            <div className="box">
                                <img src={m5} ></img>
                            </div>
                            <div className="box">
                                <div className="box1">
                                    <div className="box11"><img src={m6}></img></div>
                                    <div className="box12"><img src={m7}></img></div>
                                </div>
                                <div className="box2">
                                    <div className="box21"><img src={m8}></img></div>
                                    <div className="box22"><img src={m9}></img></div>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
            
            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={24} >
                <div className="end">
                    <div className="locate">LOCATION & MAP</div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7655073747906!2d106.70004277480575!3d10.829248889322761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175288b0632692b%3A0x6837f9e88ec780d5!2zMTExIMSQLiDEkOG6t25nIFRodeG7syBUcsOibSwgUGjGsOG7nW5nIDEzLCBCw6xuaCBUaOG6oW5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1743167082295!5m2!1svi!2s" width="100%" height="550"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                </div>
                
                </Col>
            </Row>
        </div>

        </>
    )
}
export default Home;