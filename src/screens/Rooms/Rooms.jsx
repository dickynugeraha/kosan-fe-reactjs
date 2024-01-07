import React from "react";
import NavbarApp from "../../components/common/NavbarApp";
import Footer from "../../components/common/Footer";
import { Container } from "react-bootstrap";
import RoomList from "../../components/Room/RoomList";
import RoomDescription from "../../components/Room/RoomDescription";
import API from "../../api/source-api";
import toast, { Toaster } from "react-hot-toast";
import GlobalLoading from "../../components/common/GlobalLoading";

const Rooms = () => {
  const [rooms, setRooms] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getAllRooms = async () => {
    setIsLoading(true);
    const response = await API.getRooms();
    setIsLoading(false);
    if (response.success) {
      setRooms(response.data);
    } else {
      toast.error("Failed fetch rooms");
    }
  };

  React.useEffect(() => {
    const checkOrdersExpired = async () => {
      await API.checkOrderExpired();
    };
    checkOrdersExpired();
  }, []);

  React.useEffect(() => {
    getAllRooms();
  }, []);

  return (
    <>
      <NavbarApp />
      <Toaster />
      <Container className="d-flex justify-content-center overflow-auto mb-5">
        <div style={{ width: "100%", marginTop: 60 }}>
          <h3 className="mb-4 fw-bold text-start">Rooms.</h3>
          {isLoading ? (
            <GlobalLoading />
          ) : rooms.length === 0 ? (
            <p className="text-start m-0">Rooms not found</p>
          ) : (
            <RoomList rooms={rooms} />
          )}
        </div>
      </Container>
      <RoomDescription />
      <Footer />
    </>
  );
};

export default Rooms;
