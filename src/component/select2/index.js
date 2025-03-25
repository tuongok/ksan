import React from 'react';
import { Select, Space } from 'antd';
function Select2() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <Space wrap>
                <Select
                    defaultValue="1 People"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: '1 People ',
                            label: '1 People',
                        },
                        {
                            value: '2 People ',
                            label: '2 People',
                        },
                        {
                            value: '3 People ',
                            label: '3 People',
                        },
                        {
                            value: '4 People ',
                            label: '4 People',
                        },
                        {
                            value: '5 People ',
                            label: '5 People',
                        },
                        {
                            value: '6 People ',
                            label: '6 People',
                        },
                    ]}
                />
            </Space>
        </>
    );
}
export default Select2;