import React, { useState } from 'react';
import { DatePicker, Space, Modal, Button } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const Checkinout = () => {
  const [showmodal, setshowmodal] = useState(false);
  const [selectedRange, setSelectedRange] = useState([]);

  const handleRangeChange = (dates) => {
    setSelectedRange(dates);
    setshowmodal(true);
  };

  const handleModalClose = () => {
    setshowmodal(false);
  };

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        format="YYYY-MM-DD HH:mm:ss"
        onChange={handleRangeChange}
        showTime={{
          defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('23:59:59', 'HH:mm:ss')],
        }}
      />
{/* 
      <Modal
        title="Thông báo"
        visible={showmodal}
        onOk={handleModalClose}
        onCancel={handleModalClose}
      >
        <p>
          Bạn đã chọn khoảng ngày từ:{' '}
          {selectedRange[0] ? selectedRange[0].format('YYYY-MM-DD HH:mm:ss') : 'N/A'} đến{' '}
          {selectedRange[1] ? selectedRange[1].format('YYYY-MM-DD HH:mm:ss') : 'N/A'}
        </p>
      </Modal> */}
    </Space>
  );
};

export default Checkinout;