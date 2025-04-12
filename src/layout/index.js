import { Col, Layout, QRCode, Row } from 'antd';
import "./style.css";
import { BankOutlined, CreditCardOutlined, FacebookOutlined, InstagramOutlined, MoneyCollectOutlined, QrcodeOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import Menuuuu from '../component/menungang';
import { Outlet } from 'react-router-dom';
import tuong from "../img/tuongne.png";
import card from "../img/card.png";
import logo from "../img/tuonglogo.png";
import chat from "../img/chatbox1.png"
import { useEffect, useState } from 'react';
const { Footer, Content } = Layout;


function Layoutdf() {
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true); 
            } else {
                setScrolling(false); 
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <> <div className='body'>
            <Layout className='layout' >
                <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                    <Col col-xxl-24 col-xl-24 col-lg-24 col-md-12 col-sm-12>
                        <header className={`header ${scrolling ? "scrolled" : ""}`}>
                            <Menuuuu />
                        </header>
                    </Col>
                </Row>
                <Content className='contentmain'>
                    <div className='content'> <Outlet />
                    <div className='imagee'><img src={chat}/></div>
                    </div>
                </Content>
                <Footer className='footermain'>
                    <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                        <Col span={22} >
                            <div className='footer'>
                                <div className='fo1'>
                                    <span>Chính sách </span>
                                    <span>Triển lãm</span>
                                    <span>Location & Map</span>
                                    <span>Câu hỏi</span>
                                    <span>Vietnam Destinations</span>
                                    <span>Liên hệ với chúng tôi </span>
                                </div>
                                <div className='fo2'>
                                    <div className='logo'><img src={logo}></img></div>
                                    <div className='title'>
                                        <span><b>Address:</b> Dang Thuy Tram Street, Binh Thanh District, Ho Chi Minh, Vietnam</span>
                                        <span><b>Phone</b>:  +84 335847674    <b>Hotline:</b>  +84 942 217 271    <b>Email: </b>danganhtuongg@gmail.com</span>
                                    </div>
                                </div>
                                <div className='fo3'>
                                    <div className='box'>
                                        <div>Thẻ được thanh toán </div>
                                        <div className='card'>
                                            <img src={card} />
                                        </div>
                                    </div>
                                    <div className='box'>
                                        <div>Phương thức thanh toán </div>
                                        <div>
                                            <QRCode className='qr'
                                                bgColor='white'
                                                errorLevel="H"
                                                value="https://www.facebook.com/share/15wa6e2ado/?mibextid=wwXIfr"
                                                icon={tuong}
                                            />
                                        </div>
                                    </div>
                                    <div className='box'>
                                        <div>Follow Us</div>
                                        <div>
                                            <FacebookOutlined className='anticon1' />
                                            <YoutubeOutlined className='anticon2' style={{ marginLeft: 10 }} />
                                            <InstagramOutlined className='anticon3' style={{ marginLeft: 10 }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Footer>
            </Layout>
        </div>
        </>
    )
}
export default Layoutdf;