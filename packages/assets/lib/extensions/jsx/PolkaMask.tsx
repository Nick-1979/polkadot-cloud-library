import { CSSProperties } from "react";
import MetaMask from "./MetaMask";
import PolkaGate from "./PolkaGate";

export const PolkaMask = () => {
  return (
    <div style={containerStyle}>
      <div style={iconAStyle}>
        <MetaMask />
      </div>
      <div style={iconBStyle}>
        <PolkaGate />
      </div>
    </div>
  );
};

// Inline styles
const containerStyle: CSSProperties = {
  position: "relative",
  width: "100%", // Adjust the width as needed
  height: "100%", // Adjust the height as needed
};

const iconAStyle: CSSProperties = {
  width: "100%",
  height: "100%",
};

const iconBStyle: CSSProperties = {
  position: "absolute",
  bottom: "0",
  right: "0",
  width: "50%", // 4 times smaller
  height: "50%", // 4 times smaller
  transform: "translate(-93%, -7%)", // Center B within A
};

export default PolkaMask;
