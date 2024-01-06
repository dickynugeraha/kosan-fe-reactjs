import React from "react";
import { BsCcCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#ebebeb", padding: 30 }}
    >
      <div className="text-start">
        <div className="d-flex align-items-center row">
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.735844308432!2d107.6241322!3d-6.898502!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41da106c244ecb13!2sKosan%20Mak%20Ida!5e0!3m2!1sen!2sid!4v1674306592878!5m2!1sen!2sid"
              width="300"
              height="200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{ width: 300, marginLeft: 32 }} className="col-lg-6">
            <p className="text-muted mb-1">
              Kosak Mak Ida Gg. Gagak I No.1, Sukaluyu, Kecamatan Cibeunying
              Kota Bandung, Jawa Barat 40123
            </p>
            <a
              href="https://wa.me/6287824807924"
              className="text-muted text-decoration-none"
              target="_blank"
            >
              <p>0878-2480-7924</p>
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
