// import React from 'react';
import {useParams} from "react-router-dom"
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const RoomPage = () => {
    const {roomId} = useParams();

    const myMeeting = async(element)=>{
        const appId = 2082191002;
        const serverSecret = "c72df9532e7177d92f36573921ca5f7e";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
             serverSecret,
              roomId,
               Date.now().toString() ,
                "aayush"
            );
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: element,
                scenario: {
                 mode: ZegoUIKitPrebuilt.VideoConference,
                },
           });
        }
    
  return (
    <div className="room-page" style={{ width: '100vw', height: '100vh' }}>
    <div ref={myMeeting} ></div>
  </div>
  );
}

export default RoomPage;
