
import Layoutdf from "../../layout";
import Blog from "../../pages/amthuc";
import Cart from "../../pages/amthuc";
import Tours from "../../pages/amthuc/tours";
import Home from "../../pages/home";
import Room from "../../pages/room";
export const routes=[
    {
        path:"/",
        element:<Layoutdf />,
        children:[
            {
                path:"/",
                element:<Home />,
            },
            {
                path:"/blog",
                element:<Blog />,
            },
            {
                path:"/room",
                element:<Room />,
            },
            {
                path:"/tours",
                element:<Tours/>
            }
        ]
    }
]