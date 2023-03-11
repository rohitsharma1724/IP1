import BackgroundVideo from "./video/video.mp4";
function Header({setTryingToLogin}) {
  const isTryingtoLogin = () =>{
    setTryingToLogin(prevTryingToLogin => prevTryingToLogin = true)
  }
  return (
    <header>
      <video loop autoPlay muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <h1>AI Consultancy</h1>
      <h3 style={{ color: '#FFFFFF' }}>Experience the Power of AI with Our Consultancy Services</h3>

      
      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
