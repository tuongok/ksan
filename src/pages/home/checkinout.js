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
    </Space>
  );
};

export default Checkinout;