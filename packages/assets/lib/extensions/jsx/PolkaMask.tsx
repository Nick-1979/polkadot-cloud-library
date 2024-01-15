import { CSSProperties } from "react";
import MetaMask from "./MetaMask";
import PolkaGate from "./PolkaGate";

export const PolkaMask = () => (
  <div style={containerStyle}>
    <div style={metamaskStyle}>
      <MetaMask />
    </div>
    <div style={polkagateStyle}>
      <PolkaGate />
    </div>
  </div>
);

// Inline styles
const containerStyle: CSSProperties = {
  position: "relative",
  width: "100%", // Adjust the width as needed
  height: "100%", // Adjust the height as needed
};

const metamaskStyle: CSSProperties = {
  width: "100%",
  height: "100%",
};

const polkagateStyle: CSSProperties = {
  position: "absolute",
  bottom: "0",
  right: "0",
  width: "50%",
  height: "50%",
  left: "10px",
};

export default PolkaMask;
