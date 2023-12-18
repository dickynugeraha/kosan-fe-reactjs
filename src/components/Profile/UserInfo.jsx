import React from "react";
import { Card } from "react-bootstrap";
import { FaUser, FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const UserInfo = () => {
  const ProfileItem = ({ icon, title, value }) => {
    return (
      <div className="d-flex align-items-start">
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
          <ProfileItem
            icon={<FaUser size={24} color="#1e81b0" />}
            title={"Name"}
            value={"Kale Pramono"}
          />
          <ProfileItem
            icon={<MdAttachEmail size={24} color="#e28743" />}
            title={"Email"}
            value={"kale@gmail.com"}
          />
          <ProfileItem
            icon={<FaLocationDot size={24} color="#B2A59B" />}
            title={"Address"}
            value={"Jl. jalan yuk"}
          />
          <ProfileItem
            icon={<FaWhatsapp size={24} color="#88AB8E" />}
            title={"Phone"}
            value={"+62 845651984698"}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserInfo;
