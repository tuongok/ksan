import { Button, message } from 'antd';
function Button1() {
    const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Chúc mừng bạn đã đặt phòng thành công !',
      duration: 3,
    });
  };
    return (
        <>
        {contextHolder}
        <Button onClick={success} className="booknow">Đặt Phòng</Button>
        
        </>
    )
}
export default Button1;