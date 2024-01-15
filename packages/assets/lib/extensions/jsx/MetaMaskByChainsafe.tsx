import { CSSProperties } from "react";
import MetaMask from "./MetaMask";
import Chainsafe from "./Chainsafe";

export const MetaMaskByChainsafe = () => (
  <div style={containerStyle}>
    <div style={metamaskStyle}>
      <MetaMask />
    </div>
    <div style={chainsafeStyle}>
      <Chainsafe />
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

const chainsafeStyle: CSSProperties = {
  position: "absolute",
  bottom: "0",
  right: "0",
  width: "50%",
  height: "50%",
  transform: "translate(-93%, -7%)",
};

export default MetaMaskByChainsafe;
