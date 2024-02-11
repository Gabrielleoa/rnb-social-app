import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src ="https://droledemonsieur.com/cdn/shop/files/DDM-Page-Slogan-1200x1500-Masego-01.jpg?v=1686813519" alt ="" />
                        <span className="postUsername">Masego</span>
                        <span className="postDate">5 minutes ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                <div className="postCenter">
                    <span className="postText">Inspiration today!😂🙃</span>
                    {/* <img className="postImg"src="https://news.jazzline.com/tjl/uploads/2013/11/simpsons-lisa-saxophone.jpg" alt="" /> */}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft"></div>
                    <div className="postBottomRight"></div>
                </div>
                </div>
            </div>

        </div>
    )
}