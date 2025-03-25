import { useRoutes } from "react-router-dom";
import { routes } from "../component/routes";

function Allroutes(){
    const allroute=useRoutes(routes);
    return (
        <>
        {allroute}
        </>
    )
}
export default Allroutes;