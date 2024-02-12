import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper"> 
        <div className="loginLeft">
            <h3 className="loginLogo">Heavensocial</h3>
            <span className="loginDesc">
                Share your thoughts on your favorite songs and artists.🎶
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder='Password' className='loginInput'/> 
                <button className='loginButton'>Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </div>
        </div>
        </div>
      
    </div>
  )
}
