import React from "react";
import "./Rightbar.css";


function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="newAlbumContainer">
                    <span className="albumText">
                        {/* <b>Upcoming Music</b> */}
                    </span>
                    <img className="albumImg" src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-cartoon-pink-musical-note-png-image_4723566.jpg" alt=""/>
                    <span className="albumText">
                        <b>SZA</b> and <b>Masego</b> have new music
                    </span>

                </div>
                <img className="rightbarAd" src="https://i.ytimg.com/vi/pibiLMuB7_w/maxresdefault.jpg" alt=""/>
                <h4 className="rightbarTitle"><b>Current Favorite Songs</b></h4>
                <ul className="rightbarSongList">
                    <li>Sza</li>
                    <li>Bien</li>
                    <li>Rema</li>
                </ul>
            </div>

        </div>
    )
}

export default Rightbar;