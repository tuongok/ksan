import { Menu } from 'antd';
import "./style.css"
import { SettingOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import LOGONEW from "../../img/LOGONEW.png";
import Checkinout from '../../pages/home/checkinout';
function Oke() {
  const items = [
    {
      label: <Checkinout/>,
      key: 'check',
    },
    {
      label: "Room",
      key: 'Room',
      children: [
        {
          label: "Room 1"
        },
        {
          label: "Room 2",
        },
        {
          label: "Room 3"
        },
        {
          label: "Room 4",
        },
        {
          label: "Room 5"
        },
        {
          label: "Room6",
        }

      ]
    },
    {
      label: "Pages",
      key: 'Pages',
      children: [
        {
          label: <Link to="/cart">About us</Link>
        },
        {
          label: "Promottion & Offers"
        },
        {
          label: "Local activities",
        },
        {
          label: "Menu page"
        },
        {
          label: "FAQ page",
        },
        {
          label: "404 Error page"
        }
      ]
    },
    {
      label:  <div className="logo"><img src={LOGONEW} alt='oke' ></img> </div>,
      key: 'Logo'
      
    },
    {
      label: "Blog",
      key: 'Blog',
      children: [
        {
          label: <Link to="/cart">Right siderbar</Link>
        },
        {
          label: "Left siderbar"
        },
        {
          label: "Blog Pinterest",
        },
        {
          label: "Blog Single",
          children: [
            {
              label: <Link to="/cart">No sidebar</Link>
            },
            {
              label: <Link to="/cart">Standard</Link>
            },
            {
              label: "Gallery"
            },
            {
              label: "Quote",
            },
            {
              label: "Link"
            },
            {
              label: "Audio",
            },
            {
              label: "Video"
            }
          ]
        }
      ]
    },
    {
      label: "Contact",
      key: 'Contact',
      children: [
        {
          label: <Link to="/cart">StayConnect@gmail.com</Link>
        }
      ]
    },
    {
      label: "gg translate",
      key: 'translate',}
  ]
  return (
    <>
      <Menu className='menuu' mode="horizontal"  items={items} />;
    </>
  );
}

export default Oke;