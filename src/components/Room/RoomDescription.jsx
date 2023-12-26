import React from "react";
import { Container } from "react-bootstrap";
import { MdMoneyOff } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import { GrRobot } from "react-icons/gr";
import { RiRefund2Line } from "react-icons/ri";
import { IoIosBed } from "react-icons/io";
import { IoMdFlashOff } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const RoomDescription = () => {
  const FacilityItem = ({ icon, title, subtitle }) => {
    return (
      <div className="d-flex mb-4">
        <div style={{ width: 60 }}>{icon}</div>
        <div className="ms-2 text-start">
          <p style={{ fontWeight: "bold" }} className="mb-1">
            {title}
          </p>
          <p className="text-muted mb-0">{subtitle}</p>
        </div>
      </div>
    );
  };

  const FacilityItem2 = ({ icon, title }) => {
    return (
      <div className="d-flex align-items-center mb-2">
        {icon}
        <p className="text-muted ms-2 mb-0">{title}</p>
      </div>
    );
  };

  return (
    <Container className="d-flex" style={{ marginTop: 180, marginBottom: 80 }}>
      <div className="col-lg-7">
        <h4 className="text-start mb-4" style={{ fontWeight: "bold" }}>
          What you get when you subscribe to this hostel.
        </h4>
        <FacilityItem
          icon={<MdMoneyOff size={42} />}
          title={"Free of Admin Fees."}
          subtitle={
            "You will not be charged an admin fee when making a payment at Kos Mrs.Ida."
          }
        />
        <FacilityItem
          icon={<AiOutlineFileProtect size={42} />}
          title={"Renter's Specialty Insurance."}
          subtitle={
            "In-room protection for compensation of loss of goods and damage to facilities in the room unit."
          }
        />
        <FacilityItem
          icon={<GrRobot size={42} />}
          title={"Pro Services."}
          subtitle={
            "As long as you stay here, our team will respond to your suggestions and complaints.."
          }
        />
        <FacilityItem
          icon={<RiRefund2Line size={42} />}
          title={"Refundable."}
          subtitle={"In accordance with applicable refund terms and policies."}
        />
      </div>
      <div className="col-lg-5">
        <div
          style={{ borderBottom: "1px solid #d6d6d6" }}
          className="mb-4 pb-2"
        >
          <h4 className="text-start mb-3" style={{ fontWeight: "bold" }}>
            Room type specifications.
          </h4>
          <FacilityItem2 icon={<IoIosBed size={24} />} title={"3 x 4 meter"} />
          <FacilityItem2
            icon={<IoMdFlashOff size={24} />}
            title={"Excluding electricity fee"}
          />
        </div>
        <div
          style={{ borderBottom: "1px solid #d6d6d6" }}
          className="mb-4 pb-2"
        >
          <h4 className="text-start mb-2" style={{ fontWeight: "bold" }}>
            Room facilities.
          </h4>
          <div className="d-flex">
            <div className="col-6">
              <FacilityItem2 icon={<GoDotFill size={12} />} title={"AC"} />
              <FacilityItem2 icon={<GoDotFill size={12} />} title={"Table"} />
              <FacilityItem2 icon={<GoDotFill size={12} />} title={"Closet"} />
              <FacilityItem2 icon={<GoDotFill size={12} />} title={"Mirror"} />
            </div>
            <div className="col-6">
              <FacilityItem2 icon={<GoDotFill size={12} />} title={"Bed"} />
              <FacilityItem2 icon={<GoDotFill size={12} />} title={"TV"} />
              <FacilityItem2 icon={<GoDotFill size={12} />} title={"Chair"} />
              <FacilityItem2 icon={<GoDotFill size={12} />} title={"Sink"} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDescription;
