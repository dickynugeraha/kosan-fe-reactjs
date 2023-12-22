import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FaUser, FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";

import API from "../../api/source-api";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const UserInfo = () => {
  const token = sessionStorage.getItem("token");
  const user_id = sessionStorage.getItem("user_id");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    job: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      const response = await API.getSingleUser({
        user_id: user_id,
        token: token,
      });
      console.log(response);
      if (response.success) {
        setProfile({
          name: response.data.name,
          email: response.data.email,
          address: response.data.address,
          job: response.data.job,
          phone: response.data.phone,
        });
      } else {
        toast.error("Failed get profile", { duration: 4000 });
      }
      setIsLoading(false);
    };

    getUser();
  }, []);

  const ProfileItem = ({ icon, title, value }) => {
    return (
      <div className="d-flex align-items-start">
        <Toaster />
        <div className="shadow p-2" style={{ borderRadius: "50%" }}>
          {icon}
        </div>
        <div className="ms-4">
          <p className="text-muted mb-1" style={{ fontStyle: "italic" }}>
            {title}
          </p>
          <p className="fw-bold">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <p className="mb-0 fw-bold">Profile</p>
        </Card.Header>
        <Card.Body>
          {isLoading ? (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "100%" }}
            >
              <ClipLoader
                color={"grey"}
                loading={isLoading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <>
              <ProfileItem
                icon={<FaUser size={24} color="#1e81b0" />}
                title={"Name"}
                value={profile.name}
              />
              <ProfileItem
                icon={<PiBagSimpleFill size={24} color="#BF3131" />}
                title={"Job"}
                value={profile.job}
              />
              <ProfileItem
                icon={<MdAttachEmail size={24} color="#e28743" />}
                title={"Email"}
                value={profile.email}
              />
              <ProfileItem
                icon={<FaLocationDot size={24} color="#B2A59B" />}
                title={"Address"}
                value={profile.address}
              />
              <ProfileItem
                icon={<FaWhatsapp size={24} color="#88AB8E" />}
                title={"Phone"}
                value={profile.phone}
              />
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserInfo;
