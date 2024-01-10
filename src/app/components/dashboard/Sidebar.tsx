import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

const SidebarDash = () => {
  return (
    <aside>
      <div className="dash-toggle">
        <div className="dash-logo">
          <Image src={logo} width={100} height={100} alt="Logo" />
          <h2>
            Noc<span className="danger">turnal</span>
          </h2>
        </div>
        <div className="close" id="close-btn">
          <span className="material-icons-sharp">close</span>
        </div>
      </div>
      <div className="dash-sidebar">
        <a href="#" className="active">
          <span className="material-icons-sharp">dashboard</span>
          <h3>Dashboard</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">person_outline</span>
          <h3>Users</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">receipt_long</span>
          <h3>History</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">insights</span>
          <h3>Analytics</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">mail_outline</span>
          <h3>Tickets</h3>
          <span className="message-count">27</span>
        </a>
        <a href="#">
          <span className="material-icons-sharp">inventory</span>
          <h3>Sale List</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">report_gmailerrorred</span>
          <h3>Reports</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">settings</span>
          <h3>Settings</h3>
        </a>
        <a href="#">
          <span className="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  );
};

export default SidebarDash;
