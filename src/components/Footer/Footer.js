import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import {
  faEnvelope,
  faSnowflake,
  faNewspaper,
  faCalendarAlt,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="container footer-container">
      <div className="row m-2 g-2">
        <div className="col-md-4 text-light contact-us ">
          <h6>Contact Us</h6>
          <p>Science Coaching</p>
          <p>45/5, Sector-7, Uttara, Dhaka</p>
          <p>mail: sciencecoaching@gmail.com</p>
          <p>Phone: +88016103132323</p>
        </div>
        <div className="col-md-4 text-light contact-us">
          <h6>Developed By</h6>
          <p>Raj N Acharjee</p>
          <p>Sector-7, Uttara, Dhaka</p>
          <p>mail: rajib.ipe@gmail.com</p>
          <p>Phone: +8801610313635</p>
        </div>
        <div className="col-md-4 d-flex text-light">
          <p className="m-1">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </p>
          <p className="m-1">
            <FontAwesomeIcon icon={faSnowflake} size="lg" />
          </p>
          <p className="m-1">
            <FontAwesomeIcon icon={faNewspaper} size="lg" />
          </p>
          <p className="m-1">
            <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
          </p>
          <p className="m-1">
            <FontAwesomeIcon icon={faAddressCard} size="lg" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
