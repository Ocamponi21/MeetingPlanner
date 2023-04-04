import { Route, Routes } from "react-router-dom";
import Meeting from "../../modules/Meetings";
import Participant from "../../modules/Paticipants";
import CreateHost from "../../modules/CreateHost";
import CreateParticipant from "../../modules/CreateParticipant";
import CreateMeeting from "../../modules/CreateMeeting";
import Host from "../../modules/Host";

const AppRoutes =() => {
    return(
        <Routes>
            <Route path="host" element={<CreateHost/>}/>
            <Route path="participant" element={<Participant/>}/>
            <Route path="participant/creat" element={CreateParticipant}/>
            <Route path="meeting" element={<Meeting/>}/>
            <Route path="meeting/create" element={<CreateMeeting/>}/>
            <Route path="/" element={<Host/>}/>
        </Routes>


    );
};

export default AppRoutes;

