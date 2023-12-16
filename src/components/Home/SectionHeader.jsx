import React from "react";
import { Button } from "react-bootstrap";
import kosanImage from "../../assets/images/kosan.jpg";

const SectionHeader = () => {
  return (
    <div style={styles.boxImage}>
      <div style={styles.boxDescHeader}>
        <h1 style={{ display: "inline" }}>Let's find your</h1>{" "}
        <p style={{ fontSize: 32, display: "inline", fontStyle: "italic" }}>
          {" "}
          Room,
        </p>{" "}
        <br />
        <h1 style={{ display: "inline" }}>For your perfect</h1>{" "}
        <p style={{ fontSize: 32, display: "inline", fontStyle: "italic" }}>
          {" "}
          Home.
        </p>
        <p style={{ marginTop: 24, marginBottom: 0 }}>
          Find a boarding room that you can occupy with the best prices and
          facilities,
        </p>
        <p style={{ marginBottom: 24 }}>only at Mak Ida</p>
        <Button variant="secondary">Choose a room</Button>
      </div>
    </div>
  );
};
const styles = {
  boxImage: {
    backgroundImage: `url(${kosanImage})`,
    height: "95vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  boxDescHeader: {
    position: "absolute",
    top: 200,
    left: 120,
    minWidth: 600,
    padding: 32,
    backgroundColor: "rgba(235, 235, 235, 0.7)",
    borderRadius: 25,
    textAlign: "left",
  },
};
export default SectionHeader;
