import React, { useState } from "react";
import { CiTurnR1 } from "react-icons/ci";
import t1 from "../../img/t1.jpg";
import t2 from "../../img/t2.jpg";
import t3 from "../../img/t3.jpg";
import t4 from "../../img/t4.jpeg";
import t5 from "../../img/t5.jpg";
import t6 from "../../img/t6.jpg";
import t7 from "../../img/t7.jpg";
import t8 from "../../img/t8.jpg";
import t9 from "../../img/t9.jpg";
import t10 from "../../img/t10.jpg";
import de1 from "../../img/de1.jpg";
import de2 from "../../img/de2.jpg";
import de3 from "../../img/d3.jpg";
import de4 from "../../img/de4.jpg";
import { ArrowRightOutlined } from '@ant-design/icons';
import { Carousel, Modal } from 'antd'; 
import { Col, Row } from "antd";

import "../room/style.css";
import HotelRoomView from "../test";

function Tours() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const room = [
        {
            id: 1,
            name: "Đại sứ Cruise II Trải nghiệm 1 ngày",
            price: "$60",
            desc1: "Gần đây được chuyển đổi hoàn toàn và lý tưởng cho cả khách hàng hoặc giải trí, mỗi bộ Fairmont Gold Suite cung cấp một quan điểm thiết kế lại hiện đại và ngoạn mục của một số địa danh mang tính biểu tượng nhất của Chicago. Phong phú, ấm áp và hấp dẫn, mỗi bộ tự hào có một vòi hoa sen đi bộ sang trọng hoàn chỉnh với vòi hoa sen kiểu mưa nhẹ nhàng và một phòng tắm kép. Thực hiện đặt chỗ của bạn và khám phá những gì    thực sự có nghĩa là. Khách Gold Fairmont có quyền truy cập vào phòng chờ độc quyền nơi ăn sáng được phục vụ hàng ngày, cũng như giải khát cả ngày, canapé buổi tối và món tráng miệng kèm theo một quán bar danh dự.",
            img: t1,
            roomsize:"30 - 35 m2",
            bedtype:"02 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 2,
            name:"HA Long Bay 1 ngày trải nghiệm - Hành trình 6 giờ sang trọng",
            price: "$70",
            desc1: "Sự cải tạo tinh vi của các phòng vàng Fairmont của chúng tôi mang đến một lối thoát sang trọng ở trung tâm của trung tâm thành phố Chicago. Ngâm tầm nhìn ra đường chân trời, công viên và hồ Michigan từ phòng khách sạn sang trọng của bạn, bao gồm vòi hoa sen đi bộ sang trọng hoàn chỉnh với vòi hoa sen kiểu mưa nhẹ nhàng và bàn trang điểm phòng tắm kép. Thực hiện đặt chỗ của bạn và khám phá những gì tốt như vàng thực sự có nghĩa là. Khách Gold Fairmont có quyền truy cập vào phòng chờ độc quyền nơi ăn sáng được phục vụ hàng ngày, cũng như giải khát cả ngày, canapé buổi tối và món tráng miệng kèm theo một quán bar danh dự.",
            img: t2,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 3,
            name: "HA Long Bay 1 ngày trải nghiệm với nhóm nhỏ - hành trình 6 giờ",
            price: "$50",
            desc1: "Located on the higher floors of the hotel, our Signature guest rooms provide breath taking views of some of Chicago’s most iconic landmarks including Buckingham Fountain, Millennium and Maggie Daley Parks, the Museum Campus and Lake Michigan. Rooms are available with one king or two double beds and offer contemporary décor, modern furnishings and spacious surroundings that include a 42” HDTV, luxury bedding and fine linens, spacious dressing area, marble bathroom with separate soaking tub and shower and luxurious Le Labo bath amenities. From Frank Gehry’s Pritzker Pavilion to Renzo Piano’s Modern Wing, experience the best of Chicago without having to leave your guestroom.",
            img: t3,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"View công viên khách sạn  ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 4,
            name: "Cố đô huế - Trải nghiệm văn hóa thú vị",
            price: "$100",
            desc1: "Tự hào với một số phòng nghỉ rộng rãi nhất tại Chicago, phòng nghỉ tại Fairmont được trang bị một giường cỡ King hoặc hai giường đôi và có tầm nhìn ra đường chân trời của thành phố hoặc Sông Chicago. Những phòng này cung cấp nhiều ánh sáng tự nhiên bổ sung cho đồ nội thất ấm áp, hiện đại của chúng. Phong cách trang trí được bài trí đẹp mắt với tông màu đất tinh tế được nhấn nhá bằng những mảng màu từ gối in họa tiết và tác phẩm nghệ thuật hoa nguyên bản của nhiếp ảnh gia nổi tiếng Warwick Orme. Các tiện nghi bổ sung bao gồm HDTV 50 inch, bộ đồ giường sang trọng và khăn trải giường cao cấp, khu vực thay đồ rộng rãi, phòng tắm lát đá cẩm thạch với bồn tắm ngâm riêng và vòi sen.",
            img: t4,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Biển & Hồ bơi ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 5,
            name: "Jadesails Cruise - Tour du lịch ngày sang trọng nhất ở Ha Long Bay",
            price: "$98",
            desc1: "Phòng khách Deluxe cung cấp tầm nhìn về kiến ​​trúc huyền thoại của Chicago, Công viên Grant, Công viên Thiên niên kỷ và Hồ Michigan. Mỗi phòng rộng rãi, được trang bị đẹp mắt này có sẵn với một hoặc hai giường đôi. Phong cách trang trí đương đại có các tông màu đất tinh tế được tạo điểm nhấn bởi màu sắc màu từ gối ném in và tác phẩm nghệ thuật hoa nguyên bản của nhiếp ảnh gia nổi tiếng Warwick Orme. Các tiện nghi bổ sung bao gồm HDTV 50 , giường sang trọng và khăn trải giường mịn, khu vực thay đồ rộng rãi, phòng tắm bằng đá cẩm thạch với bồn ngâm riêng và vòi sen.",
            img: t5,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 6,
            name: "Trải nghiệm 1 ngày của Vịnh Halong truyền thống với Cruise Wonderbay",
            price: "$96",
            desc1: "Gần đây được chuyển đổi hoàn toàn và lý tưởng cho cả khách hàng hoặc giải trí, mỗi bộ Fairmont Gold Suite cung cấp một quan điểm thiết kế lại hiện đại và ngoạn mục của một số địa danh mang tính biểu tượng nhất của Chicago. Phong phú, ấm áp và hấp dẫn, mỗi bộ tự hào có một vòi hoa sen đi bộ sang trọng hoàn chỉnh với vòi hoa sen kiểu mưa nhẹ nhàng và một phòng tắm kép. Thực hiện đặt chỗ của bạn và khám phá những gì    thực sự có nghĩa là. Khách Gold Fairmont có quyền truy cập vào phòng chờ độc quyền nơi ăn sáng được phục vụ hàng ngày, cũng như giải khát cả ngày, canapé buổi tối và món tráng miệng kèm theo một quán bar danh dự.",
            img: t6,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 7,
            name: "ALOVA Premium Cruise 1 ngày",
            price: "$75",
            desc1: "Phòng khách Deluxe cung cấp tầm nhìn về kiến ​​trúc huyền thoại của Chicago, Công viên Grant, Công viên Thiên niên kỷ và Hồ Michigan. Mỗi phòng rộng rãi, được trang bị đẹp mắt này có sẵn với một hoặc hai giường đôi. Phong cách trang trí đương đại có các tông màu đất tinh tế được tạo điểm nhấn bởi màu sắc màu từ gối ném in và tác phẩm nghệ thuật hoa nguyên bản của nhiếp ảnh gia nổi tiếng Warwick Orme. Các tiện nghi bổ sung bao gồm HDTV 50 , giường sang trọng và khăn trải giường mịn, khu vực thay đồ rộng rãi, phòng tắm bằng đá cẩm thạch với bồn ngâm riêng và vòi sen.",
            img: t7,
            roomsize:"20 - 30 m2",
            bedtype:"01 Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 8,
            name: "HOA LƯ – TRANG AN – MUA CAVE BY LIMOUSINE",
            price: "$70",
            desc1: "Gần đây được chuyển đổi hoàn toàn và lý tưởng cho cả khách hàng hoặc giải trí, mỗi bộ Fairmont Gold Suite cung cấp một quan điểm thiết kế lại hiện đại và ngoạn mục của một số địa danh mang tính biểu tượng nhất của Chicago. Phong phú, ấm áp và hấp dẫn, mỗi bộ tự hào có một vòi hoa sen đi bộ sang trọng hoàn chỉnh với vòi hoa sen kiểu mưa nhẹ nhàng và một phòng tắm kép. Thực hiện đặt chỗ của bạn và khám phá những gì    thực sự có nghĩa là. Khách Gold Fairmont có quyền truy cập vào phòng chờ độc quyền nơi ăn sáng được phục vụ hàng ngày, cũng như giải khát cả ngày, canapé buổi tối và món tráng miệng kèm theo một quán bar danh dự.",
            img: t8,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 9,
            name: "Bai Dinh Pagoda-Trang một chuyến đi du lịch sinh thái bằng xe limousine",
            price: "$60",
            desc1: "Tự hào với một số phòng nghỉ rộng rãi nhất tại Chicago, phòng nghỉ tại Fairmont được trang bị một giường cỡ King hoặc hai giường đôi và có tầm nhìn ra đường chân trời của thành phố hoặc Sông Chicago. Những phòng này cung cấp nhiều ánh sáng tự nhiên bổ sung cho đồ nội thất ấm áp, hiện đại của chúng. Phong cách trang trí được bài trí đẹp mắt với tông màu đất tinh tế được nhấn nhá bằng những mảng màu từ gối in họa tiết và tác phẩm nghệ thuật hoa nguyên bản của nhiếp ảnh gia nổi tiếng Warwick Orme. Các tiện nghi bổ sung bao gồm HDTV 50 inch, bộ đồ giường sang trọng và khăn trải giường cao cấp, khu vực thay đồ rộng rãi, phòng tắm lát đá cẩm thạch với bồn tắm ngâm riêng và vòi sen.",
            img: t9,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 10,
            name: "HOA Lư - Tam Coc Rice Field Boat chuyến đi bằng xe limousine",
            price: "$75 ",
            desc1: "Gần đây được chuyển đổi hoàn toàn và lý tưởng cho cả khách hàng hoặc giải trí, mỗi bộ Fairmont Gold Suite cung cấp một quan điểm thiết kế lại hiện đại và ngoạn mục của một số địa danh mang tính biểu tượng nhất của Chicago. Phong phú, ấm áp và hấp dẫn, mỗi bộ tự hào có một vòi hoa sen đi bộ sang trọng hoàn chỉnh với vòi hoa sen kiểu mưa nhẹ nhàng và một phòng tắm kép. Thực hiện đặt chỗ của bạn và khám phá những gì    thực sự có nghĩa là. Khách Gold Fairmont có quyền truy cập vào phòng chờ độc quyền nơi ăn sáng được phục vụ hàng ngày, cũng như giải khát cả ngày, canapé buổi tối và món tráng miệng kèm theo một quán bar danh dự.",
            img: t10,
            roomsize:"20 - 25 m2",
            bedtype:"01 King Bed : 2m x 2.5m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        }


    ]

    const showModal = (room) => {
        setSelectedRoom(room);
        setIsModalVisible(true);
    };


    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedRoom(null);
    };

    return (
        <>
            <div className="r10"><img src={t4} alt="Room" /></div>
            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={20}>
                    <div className="titlehead">
                        <p className="t1">Chuyến tham quan</p>
                        
                    </div>
                    <div className="room">
                        {room.map((item) => (
                            <div className="room_item" key={item.id}>
                                <div className="img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <p className="name">{item.name}</p>
                                <span className="pricee">Chỉ với {item.price} </span>
                                <br />
                                <button className="btn" onClick={() => showModal(item)}>Chi tiết  <ArrowRightOutlined /></button>
                            </div>
                        ))}
                    </div>

                    <Modal

                        visible={isModalVisible}
                        onCancel={handleCancel}
                        footer={null}
                        width="80%"
                    >
                        <div>
                            {selectedRoom && (
                                <>
                                    <div className="modal">
                                        <img src={selectedRoom.img} alt={selectedRoom.name} style={{ width: '100%', height: '450px', marginBottom: '16px' }} />
                                        <div className="modal_main">
                                            <p className="modal_title"><i>{selectedRoom.name}</i></p>
                                            <p ><span className="modal_button">Book ngay chuyến đi</span></p><br />
                                            <span className="modal_detail">Lịch trình</span>
                                            <div className="modal_desc"><i>
                                            5:15 - 5:45: Nhận từ khu phố cũ của Hà Nội <br></br>07:15: Những hành khách đã đặt dịch vụ xe buýt đưa đón sẽ tập trung tại 23 Phan Dinh Phung Street, Quận Ba Dinh, Hà Nội để khởi hành đến Halong. Hoặc bạn có thể tự mình sắp xếp vận chuyển đến phòng khách nhận phòng của Đại sứ tại Thành phố Hạ Long. <br></br>09:45: Hành khách sẽ được chuyển sang Đại sứ Du thuyền II. <br></br>10:00: Một cuộc họp ngắn chào đón trên hành trình sẽ được tổ chức tại nhà hàng. <br></br>10:00 - 11:30: Thưởng thức tham quan trong khi Đại sứ Cruise đi qua hàng ngàn đảo nhỏ đá vôi hùng vĩ ở Halong Bay và Bai Tu Long Bay. <br></br>11:30-12:30: Khám phá Hang Sot SOT-Hang động lớn nhất và tráng lệ nhất trong vịnh với những nhũ đá ngàn năm thời kỳ kỳ diệu và bí ẩn trong nhiều hình thức độc đáo. <br></br>12:30 - 14:00: Thưởng thức một bữa ăn trưa tự chọn ngon miệng trong khi Đại sứ Cruise đi ngang qua những phong cảnh đẹp nổi tiếng ở Vịnh Halong bao gồm Hang Hồ Tien, Cave Trong, ME Cung Cave, Cua van Floating Village. <br></br>13:30 - 14:00: Trà và cà phê được phục vụ tại nhà hàng. <br></br>14:00-15:00: Ghé thăm Đảo Titov-Một điểm đến lộng lẫy bao gồm một bãi biển hình mặt trăng hình lưỡi liềm, nơi bạn có thể đắm mình vào nước màu ngọc lam và leo lên đỉnh đảo nhìn thấy khung cảnh 360o ngoạn mục của vịnh. <br></br>15:00 - 16:00: Thưởng thức nhạc sống hấp dẫn tại The Sundecks trừ thứ hai và chiêm ngưỡng khung cảnh kỳ diệu của Vịnh Halong. Bạn cũng có thể tận hưởng các tiện ích trên tàu ngoạn mục: thư giãn và tắm nắng hoặc đắm mình trong bể sục không khí mở. <br></br>16:00 - 16:15: Giải quyết Bill và kiểm tra tại quầy lễ tân trên boong đầu tiên trong khi bay trở lại bến cảng. <br></br>16:30: Disembark tại Cảng hành trình quốc tế Halong. <br></br>19:00 - 19:30: Thả ở 49 HAI BA TRUNG Street 5 phút đến Khu phố cũ Hà Nội.
                                                </i></div>
                                            
                                            
                                            
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </Modal>
                </Col>
            </Row>
        </>
    );
}

export default Tours;
