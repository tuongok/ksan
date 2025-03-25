import { Col, Layout, Row } from 'antd';
import "./style.css";
import { BankOutlined, CreditCardOutlined, FacebookOutlined, InstagramOutlined, MoneyCollectOutlined, QrcodeOutlined, TwitterOutlined } from '@ant-design/icons';
import Menuuuu from '../component/menungang';
import { Outlet } from 'react-router-dom';
const { Footer, Content } = Layout;

function Layoutdf() {
    return (
        <>
            <Layout className='layout' >
                <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                    <Col col-xxl-24 col-xl-24 col-lg-24 col-md-12 col-sm-12 >

                        <header className='header'>
                            <Menuuuu />
                        </header>
                    </Col>
                </Row>
                <Content className='contentmain'>
                    <div className='content'> <Outlet /></div>
                </Content>
                <Footer className='footermain'>
                    <div className='footer'>
                        <div className='text1'><b>About
                            Stayconnect </b> is a modern and customer-focused accommodation service that offers comfortable rooms, advanced amenities, and a seamless experience for both leisure and business travelers. Designed for convenience and comfort, Stayconnect ensures guests feel at home while enjoying a touch of elegance.</div>
                        <div className='text1'><b>Contact</b><br/>
                            <b>A</b>:  02 Truong Sa, Binh Thanhh , TP HCM<br />
                            <b>P</b>:  0335847675<br />
                            <b>App</b>: Stayconect.app<br />
                            <b>E</b>:  Stayconect@gmail.com<br />
                            Show on map + </div>
                        <div className='text1'><b>Payment methods</b>
                            <div className='desc'>Pay any way you choose, we support all payment opptionss</div>
                            <Row className="iconn" gutter={[16, 16]}>
                            <Col className="icon" span={6}><BankOutlined /> </Col>
                            <Col className="icon" span={6}><CreditCardOutlined /> </Col>
                            <Col className="icon" span={6}> <MoneyCollectOutlined /></Col>
                            <Col className="icon" span={6}> <QrcodeOutlined /></Col>
                        </Row>

                            </div>
                        <div className='text1'><b>Get social</b>
                            <div className='desc'>Fllow us on social media and keep in touch with StayConnect.</div>
                        <Row className="iconn" gutter={[16, 16]}>
                            <Col className="icon " span={8}><FacebookOutlined /> </Col>
                            <Col className="icon " span={8}><InstagramOutlined />  </Col>
                            <Col className="icon " span={8}> <TwitterOutlined /></Col>
                        </Row>
                        </div>
                    </div>

                </Footer>
            </Layout>
        </>
    )
}
export default Layoutdf;