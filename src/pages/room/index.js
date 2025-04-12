import React, { useState } from "react";
import r1 from "../../img/room1.jpg";
import r2 from "../../img/room2.jpg";
import r3 from "../../img/room3.jpg";
import r4 from "../../img/room4.jpg";
import r5 from "../../img/room5.jpg";
import r6 from "../../img/room6.jpg";
import r7 from "../../img/room7.jpg";
import r8 from "../../img/room8.jpg";
import r9 from "../../img/room9.jpg";
import r10 from "../../img/room10.jpg";
import de1 from "../../img/de1.jpg";
import de2 from "../../img/de2.jpg";
import de3 from "../../img/d3.jpg";
import de4 from "../../img/de4.jpg";
import { ArrowRightOutlined } from '@ant-design/icons';
import { Carousel, Modal } from 'antd'; // Import Modal from Ant Design
import { Col, Row } from "antd";

import "./style.css";
import HotelRoomView from "../test";

function Room() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const room = [
        {
            id: 1,
            name: "Phòng đôi",
            price: "$225 +",
            desc1: "Gần đây được chuyển đổi hoàn toàn và lý tưởng cho cả khách hàng hoặc giải trí, mỗi bộ Fairmont Gold Suite cung cấp một quan điểm thiết kế lại hiện đại và ngoạn mục của một số địa danh mang tính biểu tượng nhất của Chicago. Phong phú, ấm áp và hấp dẫn, mỗi bộ tự hào có một vòi hoa sen đi bộ sang trọng hoàn chỉnh với vòi hoa sen kiểu mưa nhẹ nhàng và một phòng tắm kép. Thực hiện đặt chỗ của bạn và khám phá những gì    thực sự có nghĩa là. Khách Gold Fairmont có quyền truy cập vào phòng chờ độc quyền nơi ăn sáng được phục vụ hàng ngày, cũng như giải khát cả ngày, canapé buổi tối và món tráng miệng kèm theo một quán bar danh dự.",
            img: r1,
            roomsize:"30 - 35 m2",
            bedtype:"02 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 2,
            name: "Phòng đơn",
            price: "$265 +",
            desc1: "Sự cải tạo tinh vi của các phòng vàng Fairmont của chúng tôi mang đến một lối thoát sang trọng ở trung tâm của trung tâm thành phố Chicago. Ngâm tầm nhìn ra đường chân trời, công viên và hồ Michigan từ phòng khách sạn sang trọng của bạn, bao gồm vòi hoa sen đi bộ sang trọng hoàn chỉnh với vòi hoa sen kiểu mưa nhẹ nhàng và bàn trang điểm phòng tắm kép. Thực hiện đặt chỗ của bạn và khám phá những gì tốt như vàng thực sự có nghĩa là. Khách Gold Fairmont có quyền truy cập vào phòng chờ độc quyền nơi ăn sáng được phục vụ hàng ngày, cũng như giải khát cả ngày, canapé buổi tối và món tráng miệng kèm theo một quán bar danh dự.",
            img: r2,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 3,
            name: "Phòng đơn",
            price: "$275 +",
            desc1: "Located on the higher floors of the hotel, our Signature guest rooms provide breath taking views of some of Chicago’s most iconic landmarks including Buckingham Fountain, Millennium and Maggie Daley Parks, the Museum Campus and Lake Michigan. Rooms are available with one king or two double beds and offer contemporary décor, modern furnishings and spacious surroundings that include a 42” HDTV, luxury bedding and fine linens, spacious dressing area, marble bathroom with separate soaking tub and shower and luxurious Le Labo bath amenities. From Frank Gehry’s Pritzker Pavilion to Renzo Piano’s Modern Wing, experience the best of Chicago without having to leave your guestroom.",
            img: r3,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"View công viên khách sạn  ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 4,
            name: "Phòng đơn",
            price: "$325 +",
            desc1: "Tự hào với một số phòng nghỉ rộng rãi nhất tại Chicago, phòng nghỉ tại Fairmont được trang bị một giường cỡ King hoặc hai giường đôi và có tầm nhìn ra đường chân trời của thành phố hoặc Sông Chicago. Những phòng này cung cấp nhiều ánh sáng tự nhiên bổ sung cho đồ nội thất ấm áp, hiện đại của chúng. Phong cách trang trí được bài trí đẹp mắt với tông màu đất tinh tế được nhấn nhá bằng những mảng màu từ gối in họa tiết và tác phẩm nghệ thuật hoa nguyên bản của nhiếp ảnh gia nổi tiếng Warwick Orme. Các tiện nghi bổ sung bao gồm HDTV 50 inch, bộ đồ giường sang trọng và khăn trải giường cao cấp, khu vực thay đồ rộng rãi, phòng tắm lát đá cẩm thạch với bồn tắm ngâm riêng và vòi sen.",
            img: r4,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Biển & Hồ bơi ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 5,
            name: "Phòng đơn",
            price: "$285 +",
            desc1: "Phòng khách Deluxe cung cấp tầm nhìn về kiến ​​trúc huyền thoại của Chicago, Công viên Grant, Công viên Thiên niên kỷ và Hồ Michigan. Mỗi phòng rộng rãi, được trang bị đẹp mắt này có sẵn với một hoặc hai giường đôi. Phong cách trang trí đương đại có các tông màu đất tinh tế được tạo điểm nhấn bởi màu sắc màu từ gối ném in và tác phẩm nghệ thuật hoa nguyên bản của nhiếp ảnh gia nổi tiếng Warwick Orme. Các tiện nghi bổ sung bao gồm HDTV 50 , giường sang trọng và khăn trải giường mịn, khu vực thay đồ rộng rãi, phòng tắm bằng đá cẩm thạch với bồn ngâm riêng và vòi sen.",
            img: r5,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 6,
            name: "Phòng đơn",
            price: "$345 +",
            desc1: "Gần đây được chuyển đổi hoàn toàn và lý tưởng cho cả khách hàng hoặc giải trí, mỗi bộ Fairmont Gold Suite cung cấp một quan điểm thiết kế lại hiện đại và ngoạn mục của một số địa danh mang tính biểu tượng nhất của Chicago. Phong phú, ấm áp và hấp dẫn, mỗi bộ tự hào có một vòi hoa sen đi bộ sang trọng hoàn chỉnh với vòi hoa sen kiểu mưa nhẹ nhàng và một phòng tắm kép. Thực hiện đặt chỗ của bạn và khám phá những gì    thực sự có nghĩa là. Khách Gold Fairmont có quyền truy cập vào phòng chờ độc quyền nơi ăn sáng được phục vụ hàng ngày, cũng như giải khát cả ngày, canapé buổi tối và món tráng miệng kèm theo một quán bar danh dự.",
            img: r6,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 7,
            name: "Phòng đơn",
            price: "$435 +",
            desc1: "Phòng khách Deluxe cung cấp tầm nhìn về kiến ​​trúc huyền thoại của Chicago, Công viên Grant, Công viên Thiên niên kỷ và Hồ Michigan. Mỗi phòng rộng rãi, được trang bị đẹp mắt này có sẵn với một hoặc hai giường đôi. Phong cách trang trí đương đại có các tông màu đất tinh tế được tạo điểm nhấn bởi màu sắc màu từ gối ném in và tác phẩm nghệ thuật hoa nguyên bản của nhiếp ảnh gia nổi tiếng Warwick Orme. Các tiện nghi bổ sung bao gồm HDTV 50 , giường sang trọng và khăn trải giường mịn, khu vực thay đồ rộng rãi, phòng tắm bằng đá cẩm thạch với bồn ngâm riêng và vòi sen.",
            img: r7,
            roomsize:"20 - 30 m2",
            bedtype:"01 Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 8,
            name: "Phòng đơn",
            price: "$625 +",
            desc1: "Gần đây được chuyển đổi hoàn toàn và lý tưởng cho cả khách hàng hoặc giải trí, mỗi bộ Fairmont Gold Suite cung cấp một quan điểm thiết kế lại hiện đại và ngoạn mục của một số địa danh mang tính biểu tượng nhất của Chicago. Phong phú, ấm áp và hấp dẫn, mỗi bộ tự hào có một vòi hoa sen đi bộ sang trọng hoàn chỉnh với vòi hoa sen kiểu mưa nhẹ nhàng và một phòng tắm kép. Thực hiện đặt chỗ của bạn và khám phá những gì    thực sự có nghĩa là. Khách Gold Fairmont có quyền truy cập vào phòng chờ độc quyền nơi ăn sáng được phục vụ hàng ngày, cũng như giải khát cả ngày, canapé buổi tối và món tráng miệng kèm theo một quán bar danh dự.",
            img: r8,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 9,
            name: "Phòng đơn",
            price: "$525 +",
            desc1: "Tự hào với một số phòng nghỉ rộng rãi nhất tại Chicago, phòng nghỉ tại Fairmont được trang bị một giường cỡ King hoặc hai giường đôi và có tầm nhìn ra đường chân trời của thành phố hoặc Sông Chicago. Những phòng này cung cấp nhiều ánh sáng tự nhiên bổ sung cho đồ nội thất ấm áp, hiện đại của chúng. Phong cách trang trí được bài trí đẹp mắt với tông màu đất tinh tế được nhấn nhá bằng những mảng màu từ gối in họa tiết và tác phẩm nghệ thuật hoa nguyên bản của nhiếp ảnh gia nổi tiếng Warwick Orme. Các tiện nghi bổ sung bao gồm HDTV 50 inch, bộ đồ giường sang trọng và khăn trải giường cao cấp, khu vực thay đồ rộng rãi, phòng tắm lát đá cẩm thạch với bồn tắm ngâm riêng và vòi sen.",
            img: r9,
            roomsize:"28 - 30 m2",
            bedtype:"01 King Bed : 1.8m x 2m",
            view:"Ngoài khung cửa sổ là tòa landmark 81 ",
            smoking:"Có ban công cho việc hút thuốc"
        },
        {
            id: 10,
            name: "Phòng đơn",
            price: "$275 +",
            desc1: "Gần đây được chuyển đổi hoàn toàn và lý tưởng cho cả khách hàng hoặc giải trí, mỗi bộ Fairmont Gold Suite cung cấp một quan điểm thiết kế lại hiện đại và ngoạn mục của một số địa danh mang tính biểu tượng nhất của Chicago. Phong phú, ấm áp và hấp dẫn, mỗi bộ tự hào có một vòi hoa sen đi bộ sang trọng hoàn chỉnh với vòi hoa sen kiểu mưa nhẹ nhàng và một phòng tắm kép. Thực hiện đặt chỗ của bạn và khám phá những gì    thực sự có nghĩa là. Khách Gold Fairmont có quyền truy cập vào phòng chờ độc quyền nơi ăn sáng được phục vụ hàng ngày, cũng như giải khát cả ngày, canapé buổi tối và món tráng miệng kèm theo một quán bar danh dự.",
            img: r10,
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
            <div className="r10"><img src={r8} alt="Room" /></div>
            <Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                <Col span={20}>
                    <div className="titlehead">
                        <p className="t1">Accommodation</p>
                        <p className="t2">Khách sạn Tuong <b>cung cấp 120 phòng và phòng khách cao cấp</b> với khung cảnh ngoạn mục của<b> Hồ Hoan Kiem, Nhà thờ Hà Nội và Khu phố cũ Hà Nội</b>. Được thiết kế để trở thành một thiên đường yên bình sau một ngày dài khám phá thành phố, những căn phòng này cung cấp một nơi nghỉ ngơi lý tưởng, cho phép khách thức dậy với tầm nhìn toàn cảnh thành phố nhộn nhịp bên dưới.</p>
                        <p className="t2"><b>Sáng và rộng rãi,</b> mỗi phòng pha trộn trang trí cổ điển với đồ nội thất hiện đại, đảm bảo sự thoải mái tối đa. Tất cả các phòng đều được trang bị WiFi miễn phí, TV vệ tinh màn hình phẳng, đồng hồ báo thức, bộ điều hợp điện 220V, két sắt riêng lẻ, xe buýt nhỏ và điều hòa không khí với bộ điều nhiệt được điều khiển riêng lẻ. Để thêm tiện lợi, một máy sấy tóc cũng được cung cấp. Dịch vụ phòng có sẵn hàng ngày cho đến 21:30 tối.</p>
                    </div>
                    <div className="room">
                        {room.map((item) => (
                            <div onClick={() => showModal(item)} className="room_item" key={item.id}>
                                <div className="img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <p className="name">{item.name}</p>
                                <span className="pricee">Chỉ với {item.price} </span>
                                <br />
                                <button className="btn" >Chi tiết  <ArrowRightOutlined /></button>
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
                                            <p ><span className="modal_button">Đặt phòng ngay</span></p><br />
                                            <span className="modal_detail">Detailss</span>
                                            <p className="modal_desc"><i>{selectedRoom.desc1}</i></p>
                                            <div className="infomation">
                                                <div className="infomation_title"><b>Kích thước</b> <span> </span>{selectedRoom.roomsize}</div>
                                                <div className="infomation_title"><b>Loại giường</b> <span>{selectedRoom.bedtype} </span></div>
                                                <div className="infomation_title"><b>View </b> <span>{selectedRoom.view} </span></div>
                                                <div className="infomation_title"><b>Smoking</b>         <span>{selectedRoom.smoking} </span></div>
                                            </div>
                                            
                                            <div className="modal_slide"><Row justify="center" align="middle" gutter={[16, 16]} style={{ height: '100%' }}>
                                                <Col span={19} >
                                                    <div className="item_slide">
                                                        <div className="item_room"><i>Hình dung cụ thể về căn phòng</i> </div>
                                                        <div className="modal_3d"><HotelRoomView/></div>
                                                        
                                                    </div>
                                                </Col>
                                            </Row>
                                            </div>
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

export default Room;
