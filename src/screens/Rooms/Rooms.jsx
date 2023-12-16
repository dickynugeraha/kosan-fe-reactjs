import React from "react";
import NavbarApp from "../../components/common/NavbarApp";
import Footer from "../../components/common/Footer";
import { Container } from "react-bootstrap";
import RoomList from "../../components/Room/RoomList";

const Rooms = () => {
  const data = [
    {
      title: "101",
      price: 800000,
      photo:
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      description: "Lantai satu ruangan 1",
      status: "Available",
    },
    {
      title: "201",
      price: 780000,
      photo:
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      description: "Lantai dua ruangan 1",
      status: "Available",
    },
    {
      title: "201",
      price: 780000,
      photo:
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      description: "Lantai dua ruangan 1",
      status: "Available",
    },
    {
      title: "201",
      price: 780000,
      photo:
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      description: "Lantai dua ruangan 1",
      status: "Available",
    },
    {
      title: "201",
      price: 780000,
      photo:
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      description: "Lantai dua ruangan 1",
      status: "Available",
    },
    {
      title: "201",
      price: 780000,
      photo:
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      description: "Lantai dua ruangan 1",
      status: "Available",
    },
  ];

  return (
    <>
      <NavbarApp />
      <Container className="d-flex justify-content-center">
        <div style={{ height: "100vh", width: "80%", marginTop: 60 }}>
          <h1 className="mb-3">ROOMS</h1>
          <RoomList rooms={data} />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Rooms;
