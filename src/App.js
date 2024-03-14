import "./index.css";
import background from "./Videos/background.mp4";

function App() {
  return (
    <div className="App">
      {/* <div className="container">
        <div className="left">
          <h1>HELLO.</h1>
          <h2>Product Design</h2>
          <h2>Brand Studio</h2>
          <h2>Production</h2>
        </div>
      </div> */}

      <h1>HELLO.</h1>
      <video
        src={background}
        width="900"
        height="700"
        autoplay
        controls
        loop
      ></video>

      <div className="links">
        <h3>WORKS</h3>
        <h3>ABOUT</h3>
        <h3>CONTACT</h3>
      </div>
    </div>
  );
}

export default App;
