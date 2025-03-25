import React from 'react';
import { Select, Space } from 'antd';
function Select1() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <Space wrap>
                <Select
                    defaultValue="1 room"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: '1 room ',
                            label: '1 room',
                        },
                        {
                            value: '2 room ',
                            label: '2 room',
                        },
                        {
                            value: '3 room ',
                            label: '3 room',
                        },
                        {
                            value: '4 room ',
                            label: '4 room',
                        },
                        {
                            value: '5 room ',
                            label: '5 room',
                        },
                        {
                            value: '6 room ',
                            label: '6 room',
                        },
                    ]}
                />
            </Space>
        </>
    );
}
export default Select1;