import "./toggle.css";
import { PiToggleLeftFill } from "react-icons/pi";
import { PiToggleRightFill } from "react-icons/pi";
import { useState } from "react";


const ToggleButton = () => {
    const [clicked, setclicked] = useState(false);

    return (
        <div>
          {!clicked && (
            <PiToggleLeftFill
              className="togglebutton off"
              onClick={() => {
                setclicked(true);
                console.log("like button has been clicked");
              }}
            />
          )}
          {clicked && (
            <PiToggleRightFill className="togglebutton on" onClick={() => {setclicked(false); setTimeout(()=>setclicked(true),2000);}} />
          )}
        </div>
      );
};

export default ToggleButton;
