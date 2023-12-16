import React from "react";

const RoomList = ({ rooms }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      {rooms.map((room, index) => (
        <div style={styles.roomItem}>{room.title}</div>
      ))}
    </div>
  );
};

const styles = {
  roomItem: {
    padding: 24,
    margin: 12,
    width: 300,
    backgroundColor: "#f7f7f7",
    borderRadius: "4px",
  },
};

export default RoomList;
