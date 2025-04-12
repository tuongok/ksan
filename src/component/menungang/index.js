import { Menu, Button, Modal } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGONEW from "../../img/tuonglogo.png";
import "./style.css";
import { CaretDownOutlined, EuroCircleOutlined, MailOutlined, SearchOutlined, TagOutlined, UserAddOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Button1 from '../button';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;
function Menuu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState([]);
  const handleRangeChange = (dates) => {
    setSelectedRange(dates);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };


  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const items = [
    {
      label: <Link to="/"><div className="logo"><img src={LOGONEW} alt="oke" /></div></Link>,
      key: 'Logo'
    },
    {
      label: <Link to="/">Home</Link>
    },
    {
      label: (
        <span className='button' onClick={showModal}>
          <SearchOutlined /> Book
        </span>
      ),
      key: 'Checkin',
    },
    {
      label: <Link to="/room">Phòng <CaretDownOutlined /></Link>,
      key: 'Room',
      children: [
        { label: "Standard" },
        { label: "Tầng Execute" },
        { label: "Suit" }
      ]
    },
    {
      label: <Link to="/tours">Tours </Link>,
      key: 'Tours',
      children: [
        { label: <Link to="/blog">Ưu đãi <CaretDownOutlined /></Link> },
        { label: "Các gói dịch vụ nghĩ dưỡng" },
        { label: "Giảm giá nhiều tùy dịch vụ" },
        { label: "Dịch vụ ẩm thực " }
      ]
    },
    {
      label: <Link to="/blog">Ẩm thực <CaretDownOutlined /></Link>,
      key: 'Blog',
      children: [
        { label: "Bar & Lounge" },
        { label: "Phòng ẩm thực" },
        { label: "Mini game" }
      ]
    },
    { label: <Link to="/blog"><MailOutlined />   danganhtuongg@gmail.com</Link>, key: 'email' }
  ];

  return (
    <>
      <Menu className="menuu" mode="horizontal" items={items} />
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        width="70%"
        footer={null}
      >
        <div className='booking'>
          <div className='top'>
            <Space direction="vertical" size={12}>
              <RangePicker className='date'
                format="YYYY-MM-DD HH:mm:ss"
                onChange={handleRangeChange}
                placeholder={['Check-in', 'Check-out']}
                
                showTime={{
                  defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('23:59:59', 'HH:mm:ss')],
                }}
              />
            </Space>
            <Button1 />
          </div>
          <div className='under'>
            <div className='box'><UserAddOutlined />1 Phòng ,1 người <CaretDownOutlined /></div>
            <div className='box'><TagOutlined /> <input type='checkbox' /> Speacial Rates...</div>
            <div className='box'><EuroCircleOutlined />  <input type='checkbox' /> Use pointt </div>
            <div className='box'><input type='checkbox' /> Dịch vụ cho người tàn tật</div>
          </div>
        </div>

      </Modal>
    </>
  );
}

export default Menuu;
