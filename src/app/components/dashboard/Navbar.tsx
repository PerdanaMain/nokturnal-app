import React from "react";
import Image from "next/image";
import profile from "../../assets/images/profile-1.jpg";

const NavDash = () => {
  return (
    <div className="nav">
      <button id="menu-btn">
        <span className="material-icons-sharp">menu</span>
      </button>
      <div className="dark-mode">
        <span className="material-icons-sharp active">light_mode</span>
        <span className="material-icons-sharp">dark_mode</span>
      </div>
      <div className="profile">
        <div className="info">
          <p>
            Hey, <b>Reza</b>
          </p>
          <small className="text-muted">Admin</small>
        </div>
        <div className="profile-photo">
          <Image src={profile} width={100} height={100} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default NavDash;
