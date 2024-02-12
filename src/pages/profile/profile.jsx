import "./profile.css"
import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Rightbar from "../components/rightbar/Rightbar";
import Feed from "../components/feed/Feed";
import "./home.css";

export default function Profile() {
  return (
    <div>
       < div>
            <Topbar/>
            <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop"></div>
                <div className="profileRightBottom"></div>
            </div>
            <Feed />
            <Rightbar />
            </div>
                
        </div>
    </div>
  )
}
