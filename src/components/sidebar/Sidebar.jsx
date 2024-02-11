import React from "react";
import "./Sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarlIST">
                    <li className="sidebarListItem">
                        <RssFeedIcon  className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleIcon  className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleIcon  className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon  className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkBorderIcon  className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineIcon  className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineIcon  className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutlineIcon  className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon  className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon  className="sidebarIcon"/>
                        <span className="sidebarListItemText">Education</span>
                    </li>

                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"></hr>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnqeKBV-v1cCAPCqXfew-ytpuV-ydN8dnkFrPrqXo&s" alt="Don Toliver"/>
                        <span className="sidebarFriendName">Don Toliver</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPPP0rUjaxnnjn24UV2LW8u-vBgKqk_IeMKVXvC-c&s" alt="sza"/>
                        <span className="sidebarFriendName">SZA</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KUBcHC-xh0Whtiht8cSYShT0u5xkMq284O00mqNuHg&s" alt="Beyonce"/>
                        <span className="sidebarFriendName">Beyonce</span>

                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnhN9KYfQWnvpxNFgtsIaAEAVBtsn_WeEgFLwd8OREA&s" alt="dave"/>
                        <span className="sidebarFriendName">Dave</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcsr1uEVVlYoH5HOqNfWjHxDwAWMRV_MmdXB_F708bSQ&s" alt="stormzy"/>
                        <span className="sidebarFriendName">Stormzy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT12FezVfqiZHUmOvHPaSz4UkJUArxRUpjLVQ5zXJrqJg&s" alt="KJ"/>
                        <span className="sidebarFriendName">Kylie Jenner</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacE-z3gDMx8O8HRYEn8LvnED3E5AVzmNwnrCR4ZUr&s" alt="kej"/>
                        <span className="sidebarFriendName">Kendall Jenner</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHgNhHdjIi1xUc_R-ae5Q35pi2AEzHUV8yrCBj3rnvA&s" alt="KK"/>
                        <span className="sidebarFriendName">Kim Kardashian</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBD9uNWbplNgNq6cQMxAyxW3UMETFZ02S3VMsA-ckRQ&s" alt="KHK"/>
                        <span className="sidebarFriendName">Khloe Kardashian</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className='sidebarFriendImg'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt95m3ZoEq4Hp2Rk4nhgEoKrYShfOHloqxXx2m6VqxoQ&s" alt="KHK"/>
                        <span className="sidebarFriendName">Kourtney Kardashian</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar;