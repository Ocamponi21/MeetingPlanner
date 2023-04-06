import { Route, Routes } from "react-router-dom";
import CreateHost from "../../modules/CreateHost";
import ViewHost from "../../modules/Host";

const AppRoutes =() => {
    return(
        <Routes>
            <Route path="/" element={<ViewHost/>}/>
            <Route path="host" element={<CreateHost/>}/>
        </Routes>


    );
};

export default AppRoutes;