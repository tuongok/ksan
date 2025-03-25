import { Button, message } from 'antd';
function Button1() {
    const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Booking successfully',
      duration: 3,
    });
  };
    return (
        <>
        {contextHolder}
        <Button onClick={success} className="booknow">Book Now</Button>
        
        </>
    )
}
export default Button1;