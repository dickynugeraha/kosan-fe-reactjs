import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsCcCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="d-flex justify-content-around align-items-center"
      style={{ backgroundColor: "#ebebeb", padding: 30 }}
    >
      <div className="text-start">
        <div className="d-flex align-items-center">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.735844308432!2d107.6241322!3d-6.898502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41da106c244ecb13!2sKosan%20Mak%20Ida!5e0!3m2!1sen!2sid!4v1674306592878!5m2!1sen!2sid"
              width="300"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{ width: 300, marginLeft: 32 }}>
            <p className="text-muted mb-1">
              Kosak Mak Ida Gg. Gagak I No.1, Sukaluyu, Kecamatan Cibeunying
              Kota Bandung, Jawa Barat 40123
            </p>
            <a
              href="https://wa.me/6287824807924"
              className="text-muted text-decoration-none"
            >
              <div className="d-flex">
                <FaWhatsapp size={32} color="#128c7e" />
                <p className="ms-2">0878-2480-7924</p>
              </div>
            </a>
            <p className="text-muted mt-3">
              <BsCcCircle /> Ricky Amedio Raditya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
