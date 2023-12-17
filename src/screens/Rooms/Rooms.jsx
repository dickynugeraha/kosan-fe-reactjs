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
      photo: [
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      ],
      description: "Lantai satu ruangan 1",
      status: "Available",
    },
    {
      title: "102",
      price: 780000,
      photo: [
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      ],
      description: "Lantai dua ruangan 1",
      status: "Available",
    },
    {
      title: "103",
      price: 720000,
      photo: [
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      ],
      description: "Lantai dua ruangan 1",
      status: "Available",
    },
    {
      title: "104",
      price: 790000,
      photo: [
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      ],
      description: "Lantai dua ruangan 1",
      status: "Available",
    },
    {
      title: "105",
      price: 710000,
      photo: [
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      ],
      description: "Lantai dua ruangan 1",
      status: "Unvailable",
    },
    {
      title: "106",
      price: 725000,
      photo: [
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      ],
      description: "Lantai dua ruangan 1",
      status: "Unvailable",
    },
  ];

  return (
    <>
      <NavbarApp />
      <Container className="d-flex justify-content-center overflow-auto">
        <div style={{ width: "90%", marginTop: 60 }}>
          <h1 className="mb-4">ROOMS</h1>
          <RoomList rooms={data} />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Rooms;
