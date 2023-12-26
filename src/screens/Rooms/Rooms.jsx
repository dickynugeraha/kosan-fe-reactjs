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
    getAllRooms();
  }, []);

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
    {
      title: "107",
      price: 725000,
      photo: [
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
        "https://www.rukita.co/stories/wp-content/uploads/2021/08/rekomendasi-kost-rukita-yang-punya-sarana-olahraga-thamrin.jpg",
      ],
      description: "Lantai dua ruangan 1",
      status: "Unvailable",
    },
    {
      title: "108",
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
      <Toaster />
      <Container className="d-flex justify-content-center overflow-auto mb-5">
        <div style={{ width: "100%", marginTop: 60 }}>
          <h3 className="mb-4 fw-bold text-start">Rooms.</h3>
          {isLoading ? <GlobalLoading /> : <RoomList rooms={rooms} />}
        </div>
      </Container>
      <RoomDescription />
      <Footer />
    </>
  );
};

export default Rooms;
