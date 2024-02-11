import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RoomIcon from '@mui/icons-material/Room';



export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src='https://droledemonsieur.com/cdn/shop/files/DDM-Page-Slogan-1200x1500-Masego-01.jpg?v=1686813519' alt=''/>
            <input placeholder="What's on your mind Masego?"type='text' className='shareInput'/>
        </div>
            <hr className='shareHr'/>
            <div className="shareBottom"></div>
                <div className='shareOptions'>
                  <div className="shareOption">
                    <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo</span>
                  </div>
                  <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='Gray' className='shareIcon'/>
                    <span className='shareOptionText'>Emoji</span>
                  </div>
                  <div className="shareOption">
                    <RoomIcon htmlColor='SlateBlue' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                  </div>
                </div>
                <button className="shareButton">Share</button>
      </div>
    </div>
  )
}
