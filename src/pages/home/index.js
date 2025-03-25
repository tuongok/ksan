import Checkinout from "./checkinout";
import Sliderr from "../../component/slider/slider.js";
import "./style.css"
import banner11 from "../../img/banner11.jpg";
import rules from "../../img/rule.jpg";
import { Row, Col, Select } from 'antd';
import { WifiOutlined, DiscordOutlined, CoffeeOutlined, DownCircleOutlined, ClockCircleOutlined, CustomerServiceOutlined, SafetyOutlined, ShoppingCartOutlined, MailOutlined } from '@ant-design/icons';
import Sliderr2 from "../../component/slider2/slider2.js";
import Select1 from "../../component/slect1/index.js";
import Select2 from "../../component/select2/index.js";
import Button1 from "../../component/button/index.js";
function Home() {
    return (
        <>  <div className="body">
            <div className="banner1">
                <div className="img"><img src={banner11}></img></div>
                <div className="text">
                    Be More Than A guest
                </div>
            </div>

            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={20} >

                    <div className='section'>
                        <div className="checkinout">
                            <div className="h1">Check-in/Check-out</div>
                            <div className="box"><Checkinout /></div>
                        </div>
                        <div className="chooseroom">
                            <div className="h1">Choose Room</div>
                            <div className="box">
                                <Select1 />
                            </div>
                        </div>
                        <div className="choosepeople">
                            <div className="h1">Choose People</div>
                            <div className="box">
                                <Select2 />
                            </div>
                        </div>
                        <Button1 />
                    </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={20} >
                    <div className="section1">
                        <h1 className="title">The Spirit of Ho Chi Minh City</h1>
                        <span className="desc">Ho Chi Minh City is not only the economic, cultural, and educational hub of the nation but also a symbol of openness, dynamism, and resilience. This is where people fearlessly face challenges, constantly seek opportunities, and are always ready to innovate and rise. Beneath the dazzling lights of skyscrapers and behind the bustling streets lies the story of humble, friendly individuals who tirelessly work to build a better future.</span>
                    </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={20} >
                    <div className="slider"><Sliderr /></div>
                </Col>
            </Row>

            <div className="banner2">
                <img src={rules}></img>
                <div className="text">
                    <h2>Here are the house rules:</h2><br></br>
                    <div className="text1">
                        <span>Check-in: </span> Anytime after 2 PM.<br></br>
                        <span>Check-out:</span> By 11 AM.<br></br>
                        <span>Luggage storage:</span> We can store your luggage <br></br> for a few days if needed.<br></br>
                        <span>Read more +</span>
                    </div>
                </div>
            </div>
            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={20} >
                    <div className="section2">
                        <div className="text">Amenities at Stayconnect:</div>
                        <span className="desc">Stayconnect offers modern and convenient amenities, including high-speed Wi-Fi to keep you connected, clean and comfortable rooms with minimalist yet elegant designs, a shared kitchen fully equipped for your cooking needs, laundry services for longer stays, and a quiet workspace ideal for remote work or studying. It’s designed to provide both comfort and functionality for a seamless stay.</span>
                        <Row className="iconsmain" gutter={[16, 16]}>
                            <Col className="icon" span={4}><WifiOutlined /> </Col>
                            <Col className="icon" span={4}><SafetyOutlined /> </Col>
                            <Col className="icon" span={4}> <CoffeeOutlined /></Col>
                            <Col className="icon" span={4}> <ShoppingCartOutlined /></Col>
                            <Col className="icon" span={4}> <ClockCircleOutlined /></Col>
                            <Col className="icon" span={4}><CustomerServiceOutlined /> </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <div className="slider2"><Sliderr2 /></div>
            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={24} >
                    <div className="email"><MailOutlined />
                    <span>Join our weekly Newsletter</span> <input placeholder="Enter your email"></input> <button>SIGN UP</button>
                    </div>
                </Col>
            </Row>
        </div>
        </>
    )
}
export default Home;