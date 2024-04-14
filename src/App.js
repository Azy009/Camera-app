import "./App.css";
import Webcam from "react-webcam";
import { useRef, useState } from "react";
function App() {
  const [displayphoto, setdisplayphoto] = useState([]);
  const cameraref = useRef(null);
  const captureimage = (num) => {
    // setdisplayphoto(cameraref.current.getScreenshot());
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    const timeString = currentDate.toLocaleTimeString();
    const dateTimeString = `${dateString} ${timeString}`;
    setdisplayphoto([
      { photo: cameraref.current.getScreenshot(),currentDate:dateTimeString },
      ...displayphoto
    ]);
  };
  console.log("jjjjjjjjjjjjjjjjjj", displayphoto);
  return (
    <div className="App">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-12 mb-4">
            <h2
              style={{
                color: "#1fa661",
                fontWeight: "700",
                fontSize:'32px'
                // textDecoration: "underline",
              }}
            >
              {/* Camera App In React.js */}
            Transform Moments into Memories Using React.js
            </h2>
          </div>
          <div className="col-7" style={{ overflow: "hidden",backgroundColor:'#1fa661' }}>
            <div class="card text-center shadow p-3 my-2 bg-body-tertiary" style={{borderRadius:'0px'}}>
              <div class="card-body">
                <Webcam ref={cameraref} />{" "}
              </div>
              <div class="card-footer text-body-secondary d-flex justify-content-center">
                <button
                  class="button"
                  onClick={() => {
                    captureimage();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    viewBox="0 0 24 24"
                    height="24"
                    fill="none"
                    class="svg-icon"
                  >
                    <g
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke="#fff"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="m4 9c0-1.10457.89543-2 2-2h2l.44721-.89443c.33879-.67757 1.03131-1.10557 1.78889-1.10557h3.5278c.7576 0 1.4501.428 1.7889 1.10557l.4472.89443h2c1.1046 0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2h-12c-1.10457 0-2-.8954-2-2z"></path>
                      <path d="m15 13c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3z"></path>
                    </g>
                  </svg>
                  <span class="lable" style={{fontWeight:'500'}}>Take a Photo</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 my-4">
            <h2
              style={{
                color: "#1fa661",
                fontWeight: "700",
                textDecoration: "underline",
              }}
            >
              Captured Moments Gallery
            </h2>
          </div>
          <div className="col-12">
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: displayphoto.length > 0 ? "start" : "center",
                gap: "30px",
                paddingTop: "0px",
                paddingBottom: "28px",
                flexWrap: "wrap",
              }}
            >
              {" "}
              {displayphoto.length > 0 ? (
                displayphoto.map((item, index) => (
                  <div
                    className="card2 shadow p-3 mb-5 bg-body-tertiary rounded d-flex justify-content-center align-items-center"
                    style={{ flexDirection: "column" }}
                  >
                    <img
                      src={item.photo}
                      alt="zxcvbnm"
                      width="95%"
                      height="95%"
                    />

                    <h5
                      style={{
                        paddingTop: "4px",
                        fontWeight: "500",
                        fontSize:'18px',
                        color: "#1fa661",
                      }}
                    >
                      Photo {index + 1}
                    </h5>
                    <h5
                      style={{
                        paddingTop: "0px",
                        fontWeight: "400",
                        fontSize:'15px',
                        color: "#868e97",
                      }}
                    >
                      {item.currentDate}
                    </h5>
                  </div>
                ))
              ) : (
                <h3 style={{ textAlign: "center", color: "#1fa661" }}>
                  Not Available
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
