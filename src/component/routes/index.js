
import Layoutdf from "../../layout";
import Blog from "../../pages/blog";
import Cart from "../../pages/blog";
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
            }
        ]
    }
]