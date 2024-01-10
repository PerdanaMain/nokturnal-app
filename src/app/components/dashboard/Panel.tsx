import React from "react";
import NavbarDash from "./Navbar";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

const PanelDash = () => {
  return (
    <div className="right-section">
      <NavbarDash />
      {/* End of Nav */}
      <div className="user-profile">
        <div className="logo">
          <Image src={logo} width={100} height={100} alt="Logo" />

          <h2>AsmrProg</h2>
          <p>Fullstack Web Developer</p>
        </div>
      </div>
      <div className="reminders">
        <div className="header">
          <h2>Reminders</h2>
          <span className="material-icons-sharp">notifications_none</span>
        </div>
        <div className="notification">
          <div className="icon">
            <span className="material-icons-sharp">volume_up</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text_muted">08:00 AM - 12:00 PM</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>
        <div className="notification deactive">
          <div className="icon">
            <span className="material-icons-sharp">edit</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text_muted">08:00 AM - 12:00 PM</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>
        <div className="notification add-reminder">
          <div>
            <span className="material-icons-sharp">add</span>
            <h3>Add Reminder</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelDash;
