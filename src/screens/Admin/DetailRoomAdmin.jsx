import React, { useState } from "react";
import SidebarAdmin from "../../components/common/SidebarAdmin";
import { useLocation, useNavigate, useParams } from "react-router";
import { FiMinusCircle } from "react-icons/fi";
import { Button } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";

import API from "../../api/source-api";
import toast, { Toaster } from "react-hot-toast";
import GlobalLoading from "../../components/common/GlobalLoading";
import { photoUrl } from "../../api/const";

const DetailRoomAdmin = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const { state } = useLocation();
  const { id } = useParams();
  const { rooms } = state;
  const room = rooms.find((item) => item.id == id);

  const [isUpdatePhotos, setIsUpdatePhotos] = useState(false);
  const [componentPhotos, setComponentPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  const [inputUpdateRoom, setInputUpdateRoom] = useState({
    number_room: room.number_room,
    price: room.price,
    status: room.status,
    description: room.description,
  });

  const deleteRoomHandler = async () => {
    setIsLoading(true);
    const response = await API.deleteRoom({ id: id, token: token });
    if (response.success) {
      toast.success("Success deleted room");
      setTimeout(() => {
        toast.remove();

        navigate("/rooms-admin", { replace: true });
      }, 1000);
    } else {
      toast.error("Failed deleted room");
      toast.remove();
    }
    setIsLoading(false);
  };

  const updateRoomHandler = async () => {
    const dataForm = new FormData();
    dataForm.append("number_room", inputUpdateRoom.number_room);
    dataForm.append("price", inputUpdateRoom.price);
    dataForm.append("status", inputUpdateRoom.status);
    dataForm.append("description", inputUpdateRoom.description);
    dataForm.append("is_update_photos", isUpdatePhotos);
    if (isUpdatePhotos === true) {
      images.forEach((image_file) => {
        dataForm.append("file[]", image_file);
      });
    }

    setIsLoading(true);
    const response = await API.updateRoom({
      id: id,
      token: token,
      payload: dataForm,
    });
    console.log(response);
    if (response.success) {
      toast.success("Successfully updated room", { duration: 2000 });
      toast.remove();
    } else {
      toast.error("Failed updated room", { duration: 2000 });
      toast.remove();
    }
    setIsLoading(false);
  };

  const photoItem = () => {
    const photos = [];
    for (let index = 1; index < room?.photos?.length; index++) {
      photos.push(room?.photos[index]);
    }
    return photos;
  };

  return (
    <SidebarAdmin>
      <h1 className="mb-5">Detail Room {room.number_room}</h1>
      <Toaster />
      <div className="px-5 text-start">
        <FaArrowLeftLong
          size={20}
          className="mb-3"
          onClick={() => navigate(-1)}
        />
        <div className="input-group mb-3">
          <span className="input-group-text" style={{ width: 108 }}>
            Number
          </span>
          <input
            value={inputUpdateRoom.number_room}
            name="room_number"
            className="form-control"
            type="number"
            onChange={(e) =>
              setInputUpdateRoom((prevState) => {
                return {
                  number_room: e.target.value,
                  price: prevState.price,
                  description: prevState.description,
                  status: prevState.status,
                };
              })
            }
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" style={{ width: 108 }}>
            Price
          </span>
          <input
            value={inputUpdateRoom.price}
            name="price"
            className="form-control"
            type="number"
            onChange={(e) =>
              setInputUpdateRoom((prevState) => {
                return {
                  number_room: prevState.number_room,
                  price: e.target.value,
                  description: prevState.description,
                  status: prevState.status,
                };
              })
            }
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" style={{ width: 108 }}>
            Description
          </span>
          <input
            value={inputUpdateRoom.description}
            name="description"
            className="form-control"
            type="text"
            onChange={(e) =>
              setInputUpdateRoom((prevState) => {
                return {
                  number_room: prevState.number_room,
                  price: prevState.price,
                  description: e.target.value,
                  status: prevState.status,
                };
              })
            }
          />
        </div>

        <div className="mb-3 d-flex">
          {photoItem().map((item, index) => (
            <div
              style={{
                width: 200,
                height: 140,
                margin: "12px",
              }}
              key={index}
            >
              <img
                src={`${photoUrl}/room_images/${item}`}
                style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              />
            </div>
          ))}
        </div>
        <div className="form-check form-switch d-flex mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            {...(isUpdatePhotos ? "checked" : "")}
            onChange={() => setIsUpdatePhotos((prevState) => !prevState)}
          />
          <label className="form-check-label ms-3" for="flexSwitchCheckDefault">
            Update all photos
          </label>
        </div>
        {isUpdatePhotos && (
          <div>
            {componentPhotos.map((el) => (
              <div
                className="input-group mb-3 d-flex justify-content-between align-items-center"
                key={el}
              >
                <input
                  className="form-control"
                  type="file"
                  onChange={(e) =>
                    setImages((prevState) => [e.target.files[0], ...prevState])
                  }
                />
                <FiMinusCircle
                  size={24}
                  color="grey"
                  className="ms-3"
                  onClick={() =>
                    setComponentPhotos((prevState) =>
                      prevState.filter((item) => item !== el)
                    )
                  }
                />
              </div>
            ))}
            <p
              className="text-end text-decoration-underline"
              style={{ color: "#0000EE" }}
              onClick={() => {
                setComponentPhotos((prevState) => {
                  return [
                    Math.random().toString(36).substring(2, 7),
                    ...prevState,
                  ];
                });
              }}
            >
              Add more photo
            </p>
          </div>
        )}
        <div className="d-flex justify-content-end text-end">
          {isLoading ? (
            <div>
              <GlobalLoading />
            </div>
          ) : (
            <div>
              <Button variant="danger" onClick={deleteRoomHandler}>
                Delete
              </Button>
              <Button
                variant="warning"
                className="ms-2"
                onClick={updateRoomHandler}
              >
                Update
              </Button>
            </div>
          )}
        </div>
      </div>
    </SidebarAdmin>
  );
};

export default DetailRoomAdmin;
