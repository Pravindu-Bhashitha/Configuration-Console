import { border } from '@mui/system';
import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [switchOn, setSwitchOn] = useState(false);

  function handleSwitchToggle() {
    setSwitchOn(!switchOn);
  }

  return (
    <div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={switchOn}
          onChange={handleSwitchToggle}
          style={{ 
            backgroundColor: switchOn ? "#1ab394" : "#fff", 
            boxShadow: "none" ,
            border: switchOn ? "1px solid transparent" : "0.5px solid black",
            margin:"0px auto",
            marginTop:"2%"
          }}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
